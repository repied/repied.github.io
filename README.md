# Intro

These pages are rendered automatically on git push of the `release` branch by Github at [repied.github.io](http:\\repied.github.io).

# Jekyll
Jekyll is a Ruby Gem, it is a static site generator. It takes text written in your favorite markup language and uses layouts to create a static website.

The readme is not rendered by Jekyll because there is an index.md file. 

### In a codespace 
Jekyll is installed in the devcontainer.json image.

### Locally (chromeos ubuntu penguin)
You need to install [Ruby and setup Jekyll](https://jekyllrb.com/docs/installation/ubuntu/) :
```
sudo apt-get install ruby-full build-essential zlib1g-dev
gem install jekyll bundler
```
Then to use [Jekyll](https://jekyllrb.com/docs/step-by-step/01-setup/) when there is already a Gemfile.
```
bundle config set --local path '~/lib/gems' # need to install in user folder
bundle update
bundle install
```
Then one of 
```
bundle exec jekyll build
bundle exec jekyll serve
bundle exec jekyll serve --livereload
```

# Adding news posts

New md files in ./posts named like `2016-05-19-codeblocks-ahoy.md` will be added as links in the generated ./_layouts/home.html from ./index.md.

# Adding new page
All .md which are not in ./_posts are generated according to the ./_layouts/page.html
