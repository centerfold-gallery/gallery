The website and gallery for Centerfold.

## Installation

You'll need the config.json file for secret keys. This file should not be in version control, since our repository is public. We could make the repo private, then version control the config.json. You can recreate this file by downloading the Heroku config variables and placing them in a JSON at config.json.

Next, simply use:

```console
$ npm install
$ node index.js
```

At this point you will have a local server running on port 3000. View it at http://localhost:3000/

## Deployment
To deploy this site to Heroku:
```console
$ git push heroku master
```

## Development
If you're developing on the Node server and want to add a new dependency:
```console
$ npm install plugin_name --save
```

## Issues

Please file bugs here - https://github.com/centerfold-gallery/gallery/issues
