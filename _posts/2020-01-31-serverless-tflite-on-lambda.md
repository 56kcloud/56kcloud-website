---
layout: post
title:  "How to deploy TensorFlow Lite models on AWS Lambda"
author: jpgehrig
categories: [ TensorFlow, Machine-Learning, Serverless ]
image: assets/img/posts/beautiful-day-in-anzere.jpg
caption: Beautiful day in Anzere by jpgehrig
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


> about machine learning and TensorFlow Lite

> about serverless

> about lambda layers

> and why combining them can be a good alterneative to SageMaker endpoints.


## Create a Serverless app

> Create a serverless app which does runs a model on an image
> End of this section you should be able to POST infer a model on an image referenced by url


## Build TensorFlow Lite runtime for Lambda


Run a `lambci/lambda:build-python3.7` docker container

```bash
    $ docker run -it -v (PWD):/app lambci/lambda:build-python3.7 bash
```

Clone tensorflow

    $ git clone https://github.com/tensorflow/tensorflow.git

Install numpy (required to build TensorFlow)

    $ pip install numpy

Build tensorflow lite

    $ cd tensorflow
    $ sh tensorflow/lite/tools/pip_package/build_pip_package.sh

Copy the wheel out of the docker container

    $ cp /tmp/tflite_pip/python3/dist/tflite_runtime-2.0.0-cp37-cp37m-linux_x86_64.whl /app/wheels/


hello

## Use the TensorFlow Lite runtime

That's it!


 You can now install this wheel in your serverless app by adding:

    /wheels/tflite_runtime-2.0.0-cp37-cp37m-linux_x86_64.whl

to your `requirements.txt` and mounting the wheels folders into the docker build image with:

    dockerRunCmdExtraArgs: ["-v", "${env:PWD}/wheels:/wheels"]

> required to build on mac


