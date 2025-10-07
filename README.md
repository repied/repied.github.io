# Intro

These pages are rendered automatically on git push by Github at [repied.github.io](http:\\repied.github.io) by Jekyll.

The readme is not rendered by Jekyll because there is an index.md file. 


# Jekyll
Jekyll is a Ruby Gem, it is a static site generator. It takes text written in your favorite markup language and uses layouts to create a static website.
### In a codespace 
Jekyll is installed in the devcontainer.json image.
### Locally (chromeos ubuntu penguin)
You need to install [Ruby and setup Jekyll](https://jekyllrb.com/docs/installation/ubuntu/).

Then to use [Jekyll](https://jekyllrb.com/docs/step-by-step/01-setup/) when there is already a Gemfile.

```
bundle config set --local path '~/gems' # need to install in user folder
bundle update
bundle install
bundle exec jekyll build
bundle exec jekyll serve
```
