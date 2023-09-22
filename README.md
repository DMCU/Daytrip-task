# Test automation framework for the Daytrip web application

This repository contains automated tests for the trip booking functionality of the Daytrip web application. It was created for the purpose of the recruitment process at DAYTRIP company. Framework has been done using Cypress and javascript. Solution has been done using Page Object Model design pattern described in more details below. All the selectors are being kept in `selectors.js` file for easy maintanance. 

## Test suits - desktop view and responsive view

In this repository, you can find two test suites: `bookTripE2E.cy.js` for the default viewport, and the `bookTripE2EResponsive.cy.js` suite, which has been designed to be responsive. The `cy.viewport()` command is used to set the viewport to the size of an iPhone X, ensuring that the tests are validated for smaller screen sizes as well.

## E2E Test Flow

The E2E test covers the following steps:

1. Visit the website.
2. Set initial settings such as destinations, trip start date, and confirm the selection.
3. Book the trip.
4. Confirm the booking.
5. Provide email information.
6. Fill out the user data form.
7. Select the cash payment method and confirm.

## Page Object Pattern

The tests are organized using the Page Object Pattern, which separates test actions and assertions from the page structure. The following page objects are used:

- `initialSettingsPage`: Handles interactions with the initial settings page.
- `bookYourTripPage`: Manages actions on the "Book Your Trip" page.
- `completeYourBookingPage`: Contains actions related to completing your booking.
- `completeBookingFormPage`: Manages the user data form and payment method selection.

## Instaltion

To set up and run the tests locally, follow these steps:

1. Clone the repository to your local machine: `git clone https://github.com/DMCU/Daytrip-task.git`
2. Navigate to the repository's root directory: `cd Daytrip-task`
3. Install the required dependencies using npm (Node.js package manager): `npm install`
4. Install Cypress using npm: `npm install cypress --save-dev`

## Running the tests

Open the Cypress Test Runner: `npx cypress open` In the Cypress Test Runner, select the test file you want to run:

- `bookTripE2E.cy.js` - test suit in default view
- `bookTripE2EResponsive.cy.js` - test suit in iPhone X responsive view