# ThadItrellisFrontendTripCalculator

## Project breakdown

* Hosted on  aws s3 @ http://itrellisthadfrontend.s3-website-us-east-1.amazonaws.com/

* Contract is: 

```
{
	"expenseTripRecord": [{
			"fullName": some_string,
			"expenses": [expense1, expense2]
		}]
}
```

* It uses Material2 for main styling and reactive forms for the form management.

* Material2 is abstracted into a shared library, so it can port to other angular apps.

* Comments should paint the way of the code.

* The calculator is unit tested to show that I can and do run unit tests. Given more time, or even onsight, I can write them more or even live.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
