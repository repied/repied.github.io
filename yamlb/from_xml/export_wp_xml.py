import re
import sys
import xml.etree.ElementTree as ET
from datetime import datetime  # Import datetime
from html import unescape
from pathlib import Path

# Input XML filename (assume the script is run from the workspace root folder)
DEFAULT_XML = (
    "./yamlb/from_xml/wordpress.2008-05-20_blog_yamlb_before_adding_inria_blog.xml"
)
OUT_DIR = Path("./yamlb/from_xml/extracted/")

SAFE_FILENAME_RE = re.compile(r"[^A-Za-z0-9._-]+")


def slugify(title: str, post_id: str) -> str:
    base = title.strip() or f"post-{post_id}"
    base = unescape(base)
    base = base.replace("\n", " ").replace("\r", " ")
    slug = SAFE_FILENAME_RE.sub("-", base).strip("-")
    if not slug:
        slug = f"post-{post_id}"
    return slug.lower()


def extract_text(elem, tag):
    t = elem.find(tag)
    if t is None or t.text is None:
        return ""
    return t.text


def cdata_content(elem, tag):
    t = elem.find(tag)
    if t is None or t.text is None:
        return ""
    tt = t.text
    links_to_replace = [
        "http://emotion.inrialpes.fr/%7Edangauthier/blog/wp-content/uploads/2006/05/",
        "http://emotion.inrialpes.fr/~dangauthier/blog/wp-content/uploads/2006/04/",
        "https://emotion.inrialpes.fr/people/dangauthier/images/",
        "http://emotion.inrialpes.fr/people/dangauthier/images/",
        "http://emotion.inrialpes.fr/~dangauthier/images/",
        "https://emotion.inrialpes.fr/~dangauthier/blog/wp-content/uploads/2006/04/",
    ]
    for link in links_to_replace:
        tt = tt.replace(link, "../../media/")
    return tt


def main(xml: str):
    tree = ET.parse(xml)
    root = tree.getroot()
    channel = root.find("channel")
    items = channel.findall("item") if channel is not None else []

    index_entries = []

    for item in items:
        title = extract_text(item, "title")
        link = extract_text(item, "link")
        pubDate = extract_text(item, "pubDate")

        # Parse pubDate and format to YYYY-MM-DD
        pubDateIso = ""
        if pubDate:
            try:
                # Example format: "Thu, 01 Jan 1970 00:00:00 +0000"
                dt_object = datetime.strptime(pubDate, "%a, %d %b %Y %H:%M:%S %z")
                pubDateIso = dt_object.strftime("%Y-%m-%d")
            except ValueError:
                print(
                    f"Warning: Could not parse pubDate '{pubDate}' for post '{title}'",
                    file=sys.stderr,
                )

        description = extract_text(item, "description")  # often empty
        content = cdata_content(
            item, "{http://purl.org/rss/1.0/modules/content/}encoded"
        )
        post_id = (
            extract_text(item, "{http://wordpress.org/export/1.0/}post_id") or "unknown"
        )
        status = extract_text(item, "{http://wordpress.org/export/1.0/}status")
        post_type = extract_text(item, "{http://wordpress.org/export/1.0/}post_type")

        # Collect comments
        comments = item.findall("{http://wordpress.org/export/1.0/}comment")
        comment_blocks = []
        for c in comments:
            cid = extract_text(c, "{http://wordpress.org/export/1.0/}comment_id")
            cauthor = extract_text(
                c, "{http://wordpress.org/export/1.0/}comment_author"
            )
            cdate = extract_text(c, "{http://wordpress.org/export/1.0/}comment_date")
            ccontent = extract_text(
                c, "{http://wordpress.org/export/1.0/}comment_content"
            )
            approved = extract_text(
                c, "{http://wordpress.org/export/1.0/}comment_approved"
            )
            block = [
                "",
                "---",
                # f"- comment_id: {cid}",
                f"- author: **{cauthor}**",
                f"- date: {cdate}",
                # f"approved: {approved}",
                "",
                ccontent or "",
            ]
            comment_blocks.append("\n".join(block))

        num_comments = len(comment_blocks)  # Count the number of comments

        # Build markdown preserving raw HTML within content body
        slug = slugify(title or "", post_id)
        filename = f"{slug}.md"
        out_path = OUT_DIR / filename

        md_lines = [
            "---",
            f"title: {title.replace(':', ' ') or '(no title)'}",
            "---",
            "",
        ]
        md_lines.append(f"|*Original link*| {link}|")
        # md_lines.append(f"|*pubDate*| {pubDate}|")
        if pubDateIso:
            md_lines.append(f"|*Date*| {pubDateIso}|")  # Add pubDateIso to output
        # md_lines.append(f"|*post_id*| {post_id}|")
        md_lines.append(f"|*Status*| {status}|")
        # md_lines.append(f"|*type*| {post_type}|")
        if description:
            md_lines.append("\n**Description**")
            md_lines.append("")
            md_lines.append(description)
        if content:
            # md_lines.append("\n**Content**")
            md_lines.append("")
            # Do not modify content: write as-is. Ensure we don't inadvertently escape.
            md_lines.append(content)
        if comment_blocks:
            md_lines.append("# Comments")
            md_lines.append("")
            md_lines.append("\n".join(comment_blocks))

        out_path.write_text("\n".join(md_lines), encoding="utf-8")
        index_entries.append(
            (pubDate, pubDateIso, title, filename, num_comments)
        )  # Add num_comments here

    # Create index.md of all posts
    index_entries.sort(key=lambda x: (x[1], x[2]), reverse=True)
    index_lines = [
        "---",
        "title: Yet Another Machine Learning Blog",
        "---",
        "",
    ]
    for pd, pdIso, title, fn, num_comments in index_entries:  # Unpack num_comments
        display = title or "(no title)"
        comment_info = f" ({num_comments} comments)" if num_comments > 0 else ""
        index_lines.append(
            f"- {pdIso} : [{display}]({fn}){comment_info}"
        )  # Include comment_info
    (OUT_DIR / "index.md").write_text("\n".join(index_lines), encoding="utf-8")


if __name__ == "__main__":
    xml = DEFAULT_XML
    if len(sys.argv) > 1:
        xml = sys.argv[1]
    main(xml)
