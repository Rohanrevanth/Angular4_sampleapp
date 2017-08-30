# Simple Angular4 app with service-worker included

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## For offline usage

Method 1.

Run `ng build --prod` for production build.

Run `npm run sw` to generate `service-worker.js` and its contents from `dist` directory.

We need to host our static files which are in the dist folder. To do this, we use a small light weight server [Live-Server](https://www.npmjs.com/package/live-server) to host our static generated code. 
Run `npm install -g live-server`. Once installed run ` npm run static-serve` (Already added this script in package.json)

If we go back to the application tab we can see our Service Worker is now installed and running. Let’s go to the network tab and click the offline check mark and reload the page.
Voilà. Congratulations, you have created your first offline capable app!

Method 2.

Confused? 
Install live server by using `npm install -g live-server` and run `npm run bgs` to generating production build, service-worker and to start server all at once.

## Note

Replace icons in manifest.json according to size if you are installing the web app for your mobile.
