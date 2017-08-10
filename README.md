# Kalibri Labs Angular Technical Evaluation

## Overview

This project is a simple "TODO" application.  Users enter items in the left column, and type 'Enter' or click the 'Save' button to update the display list to the right.

![Screenshot of evaluation](./screenshot.png?raw=true "Screenshot of evaluation")

## Evaluation Procedure

Fork this repository using your own Github account, implement the evaluation requirements below, and push the changes to the repository fork.  

On completion, send a link to the forked repository to Kalibri for review. 

Take care to ensure all requirements are met and the application and its tests run without error.  

## Evaluation Requirements

Update the application so that when a user clicks an item in the display list, it removes that item via the repository service and updates the view to match.

Include unit tests to verify expected behavior, particularly within the, app component, display component, and repository service.  

## Environment Setup

### Install Node
This application requires Node 6.9.0 or higher, together with NPM 3 or higher (NPM gets installed by way of installing Node).
Instructions for all platforms are located here: [Node.js](https://nodejs.org/en/download/)

### Install the latest Angular CLI  
After node is installed, install Angular CLI (v 1.2.3+) by executing from a terminal:

    npm install -g @angular/cli

### Install `git`
If not already installed locally, instructions to install `git` can be found here: [git homepage](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### IDE
We recommend using Visual Studio Code, though any IDE of choice could be used: [https://code.visualstudio.com/](https://code.visualstudio.com/)

## Running the application

From the application directory, run `ng serve` and navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Reference documentation

* [Angular Component Interaction](https://angular.io/guide/component-interaction)
* [Angular Testing Guidelines](https://angular.io/guide/testing)
* [Jasmine for spy behavior](https://jasmine.github.io/2.6/introduction.html) 
