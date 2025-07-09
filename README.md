# Intro

These pages are rendered automatically on git push by Github at [repied.github.io](http:\\repied.github.io).

The readme is not rendered by Kekyll because there is an index.md file. 


# Jekyll

I think my install.sh is masking the jekyll from the devcontianer image. 

This may be a [better way](https://jekyllrb.com/docs/step-by-step/01-setup/)

```
gem install jekyll bundler
export PATH="$PATH:$(gem env gemdir)/bin"
bundle init 
bundle add jekyll
jekyll build
jekyll serve
```

Note: can use `bundle exec jekyll` as well to call the installed gem if the PATH is not set.
