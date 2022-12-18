# Lauku Forms
Lauku forms is a project designed and created for "Latvijas Lauku konsultāciju un izglītības centrs".

## Technical Overview
HTML & SASS boilerplate. Uses Parcel v2.8 as the bundler. Bootstrap v5 SASS & JS setup.

## Requirements
Ensure that you have Node.js (v16.13.0) installed. [You can download it here](https://nodejs.org/download/release/v16.13.0/).

## Quick Start
* run `npm ci`
* run `npm run dev` to start Parcel
* open browser at http://localhost:1234/

## Django + Bootstrap

{
 "source": "./testapp/static/scss/main.scss",
  "targets": {
    "default": {
      "distDir": "./testapp/static/dist"
    }
  },
  "scripts": {
    "dev": "parcel ./testapp/templates/index.html",
    "build:css": "parcel build ./testapp/static/scss/main.scss --dist-dir dist",
    "watch": "parcel watch ./testapp/static/scss/main.scss  --hmr-port 34471"
  },

For this project the file that will be entry point is main sass file.
Small instruction how to create a working environment.

1. Create a `static` folder inside Django app.
2. Inside `static` folder create `scss` folder which contains contents from previous proj.
3. Create a `dist` folder. This is where the sass will be built and used for our template html.
4. Include css in html file `<link rel="stylesheet" href="{% static 'dist/main.css' %}">`
5. Run commands
    * `npm run build:css`
    * `npm run watch`
