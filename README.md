
The edeltech.ch Website
===

This is the source code of the [Edeltech website](http://www.edeltech.ch).

## Local development

### Install dependencies

    $ bundle install --path vendor/bundle


### Launch the Jekyll development server

    $ bundle exec jekyll serve


## Add a blog post

To add a new blog post, create a new markdown file in the `_posts` folder. The filename structure is very important, use: `YYYY-MM-DD-my-post-title.md`

### File header

Jekyll expects to find some values in the header of the post file, here is an example:

    ---
    layout: post
    title:  "How to deploy TensorFlow Lite models on AWS Lambda"
    author: jpgehrig
    categories: [TensorFlow, Machine-Learning, Serverless]
    image: assets/img/posts/beautiful-day-in-anzere.jpg
    caption: Beautiful day in Anzere by jpgehrig
    ---

### Content

Write the content of your blog post using standard markdown syntax.


Save, push, wait a few minutes, enjoy!
