# js_sub_array_tests

I put this together to test out some of the advice provided in this excellent
article:
http://perfectionkills.com/how-ecmascript-5-still-does-not-allow-to-subclass-an-array/

I wanted to see how much of this was still true, several years on. This advice
was also provided mostly for web browsers, and I wanted to see how Node.JS
affected the outcomes.

## Getting Started

You'll need the CLI module for [grunt](http://gruntjs.com) installed globally:

    npm install -g grunt-cli

In the project root, run:

    npm install

That will install the npm modules required for running the unit tests.

Once that's done, you can run the Node.JS unit tests with:

    grunt

or:

    grunt test

Additionally, you may run the browser-based tests with:

    grunt browser

although these tests are more interesting if actually opened in real browsers.
In fact, the PhantomJS + Mocha combination for these browser tests doesn't
really work that well in Node.JS, so grab a browser.

## Results

### Node.JS

- `grunt test` with Node.JS v0.10.5

                | proper [[Class]] | length/indices
--------------- | ---------------- | ---------
naive           | no               | yes
stack           | no               | yes
makeSubArray    | no               | yes
wrapper: direct | yes              | yes

This is quite different to @kangax's [original results](http://perfectionkills.com/how-ecmascript-5-still-does-not-allow-to-subclass-an-array/#summary).
I can only guess that V8 does things differently compared to the browser JavaScript engines that were used in the original comparision.

### Google Chrome

- browser tests run in Chromium 26

- same results as Node.JS

It isn't surprising the Chrome repeats the Node.JS results, as they both use V8.

### Mozilla Firefox

- browser tests run in Firefox 20

- same results as Node.JS

Firefox's JavaScript engine is a modern ECMAScript 5.1 engine, just like V8.
I'm starting to sense a pattern here.

### Internet Explorer

- browser tests run in Microsoft Internet Explorer 10

- same results as the others

## License
Copyright (c) 2013 Ron Waldon  
Licensed under the MIT license.
