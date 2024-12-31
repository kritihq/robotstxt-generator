# Easy Robots.txt Generator

A study in webapp development with focus on UI design. Aim of this project to design and develop an web application which will generate `robots.txt` file as per [RFC 9309](https://www.rfc-editor.org/rfc/rfc9309.html) standards.
Application is hosted alongside free tools at [kriti.blog](https://kriti.blog/tools/robotstxt-generator/).

## Stack

Keeping it simple. If you think you need a server to run this locally then you are __ngmi__.
All you need is a browser with JS support enabled.

- HTML
- JS
- CSS styles (inline)

## Deployment

Its a simple web app can be hosted as static file server. All computation happens on client side. So just worry about sending the files to client's machine somehow.

__Source looks different than the [hosted](https://kriti.blog/tools/robotstxt-generator/) version?__

Well that's because its actaully an blog i.e. the code was copied in to `.md` file and published using [Kriti.blog](https://kriti.blog). 
Why? Because [Kriti.blog](https://kriti.blog) can 😎.

## Source

All the logic is housed in `index.html`.
A dictionary of bots can be found in `assets/tools/robotstxt-generator/bots.js`.

## Future?

Its a simple web app it hardly requires any maintenance. That happens when you KISS.
Although the dictionary of bots can be updated regularly, but its optional.
