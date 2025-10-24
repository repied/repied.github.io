# Copilot Instructions for repied.github.io

This repository is a Jekyll-based static site, rendered automatically on GitHub Pages from the `release` branch. The site uses the Minima theme, with local overrides for layouts and includes.

## Architecture & Key Patterns
- **Jekyll structure:**
  - Content lives in Markdown files (`.md`) in the root, `_posts/`, and custom folders (e.g. `yamlb/blog/summaryblog/`).
  - `_layouts/` and `_includes/` contain HTML templates. Local files here override remote Minima theme files.
  - `_config.yml` configures site metadata, navigation, and theme settings.
- **Posts:**
  - New blog posts: add `.md` files to `_posts/` (or custom blog folders). Use `YYYY-MM-DD-title.md` naming for Jekyll to auto-link and render as posts.
  - Non-post pages: add `.md` files outside `_posts/`, rendered with `page.html` layout.
- **Indexing:**
  - Main index: `index.md` (not README.md) is the homepage and entry point.
  - Custom blog indexes (e.g. `yamlb/blog/summaryblog/index.md`) are manually maintained for non-standard post folders.
- **Theme:**
  - Minima is set as a remote theme, but local `_layouts/` and `_includes/` take precedence if present.

## Developer Workflow
- **Local development:**
  - Use the provided `Gemfile` and run:
    ```bash
    bundle install
    bundle exec jekyll serve --livereload
    ```
  - For ChromeOS/Ubuntu, install Ruby and Jekyll as described in `README.md`.
- **Codespaces/devcontainer:**
  - Jekyll is pre-installed; use the same `bundle exec` commands.
- **Deployment:**
  - Pushing to `release` branch triggers GitHub Pages build and deploy.

## Conventions & Patterns
- **Content:**
  - Preserve original formatting and metadata when migrating/importing posts (e.g. from WordPress XML).
  - Use Markdown for all new content, but retain raw HTML for complex structures if needed.
- **Navigation:**
  - Update `_config.yml` to add new pages to the site header.
  - For custom blog folders, maintain a manual index file linking all posts.
- **Customization:**
  - To override Minima theme, edit local files in `_layouts/` and `_includes/`.

## Examples
- To add a new post: create `_posts/2025-10-13-new-feature.md` with front matter and content.
- To add a new page: create `about.md` and add it to `_config.yml` for navigation.
- To update the homepage: edit `index.md`.

## Key Files
- `_config.yml` — site config and navigation
- `_layouts/` — HTML templates (local override)
- `_includes/` — reusable HTML snippets
- `Gemfile` — Ruby dependencies
- `index.md` — homepage
- `_posts/` — standard blog posts
- `yamlb/blog/summaryblog/` — custom blog import (manual index)

---
For more details, see the `README.md` and Jekyll docs: https://jekyllrb.com/docs/
