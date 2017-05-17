# Meetup
A website to help people find car events around their area

### Description
Currently this website will allow users to post, edit, delete events. Users can look at events created, they also can check times and dates of upcoming events.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.3.

## Downloading Meetup/Setting Up
* Clone
  * Open your terminal program
    * On a Mac, this would be in the Applications/Utilities directory, and is called, "Terminal"
    * Windows uses a Terminal program as well, but a Terminal with all the capabilities we'll require is not installed by default. Thankfully, we can easily download and install a Terminal program that does fit our needs.
There are many options available, but we recommend using a terminal program called git bash. You can download this free program at [msysgit.github.io](https://ChanceMagno.github.io/Meet-angular-firebase
).
  * Clone this track survey repository by typing, `git clone(https://ChanceMagno.github.io/Meet-angular-firebase
)`
* Download
  * Click [here](https://ChanceMagno.github.io/Meet-angular-firebase
/archive/master.zip) to download the repo
  * Unzip the zipped repository
* Once you have the repository on your computer, navigate in terminal/command line into Meet-angular-firebase. (example: cd /desktop/Meet-angular-firebase)
* Inside Meet-angular-firebase type the following commands:
* type gulp serve and the page will automatically load
* You will need to create a file in your APP folder called api-keys.ts
* In your api-keys.ts you will need to add your firebase credentials, it should look like this(x's represent your firebase info):

export var masterFirebaseConfig = {
  apiKey: "xxxxxxxxxxxx",
  authDomain: "xxxxxxxxxx",
  databaseURL: "xxxxxx",
  projectId: "xxxxx",
  storageBucket: "xxxxx",
  messagingSenderId: "xxxxxx"
  };
  * A file in this application is named meetups-bed2c-export.json can be imported to your firebase so you are able to view how the website works instantly.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build


run NPM install 

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Known Issues
currently the search option is not working.

## Future Plans
Add users/profiles
Add ability for users to show if they are going to an event
Add ability for users to see who all is going to each event
