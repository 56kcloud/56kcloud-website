
The edeltech.ch Website
===

This is the source code of the [Edeltech website](http://www.edeltech.ch).

## Local development

### Install RVM, with latest ruby

    $ curl -sSL https://get.rvm.io | bash -s stable --ruby
    $ source ~/.rvm/scripts/rvm

### Install dependencies

    $ bundle install


### Launch the Jekyll development server

    $ bundle exec jekyll serve


## Add a blog post

To add a new blog post, create a new markdown file in the `_posts` folder. The filename structure is very important, use: `YYYY-MM-DD-my-post-title.md`

### File header

Jekyll expects to find some values in the header of the post file, here is an example:

    ---
    layout: post
    author: <your name>
    thumbnail: "<thumbnail image url>"
    preview-image: "<preview image url>"
    lang: <en or fr>
    comments: <true or false>
    ---

### Content

Write the content of your blog post using standard markdown syntax.


Save, push, wait a few minutes, enjoy!
