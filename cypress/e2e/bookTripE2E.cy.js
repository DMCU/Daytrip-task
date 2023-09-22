import { bookTripFlowTestData } from "../testData/bookTrip";
import { currentDay } from "../testData/bookTrip";
import { onInitialSettingsPage } from "../pages/initialSettingsPage";
import { onBookYourTripPage } from "../pages/bookYourTripPage";
import { onCompleteYourBookingPage } from "../pages/completeYourBookingPage";
import { onCompleteBookingFormPage } from "../pages/completeBookingFormPage";

describe("Booking a trip from A to B location with the cash as a payment option", () => {

  beforeEach(() => {
    cy.visit("/", {
      onBeforeLoad(win) {
        Object.defineProperty(win.navigator, 'language', { value: 'en' });
        Object.defineProperty(win.navigator, 'languages', { value: ['en'] });
        Object.defineProperty(win.navigator, 'accept_languages', { value: ['en'] });
      },
      headers: {
        "Accept-Language": "en-US,en;q=0.9"
      }
    })
  });


  it("Should book a trip from point A to point B with cash option", () => {

    onInitialSettingsPage.destinationsInputsToBeVisible();
    onInitialSettingsPage.setDestinations(bookTripFlowTestData.destinations.startCity, bookTripFlowTestData.destinations.finalCity,);
    onInitialSettingsPage.setTripsStartDate(currentDay);
    onInitialSettingsPage.confirmSelectionButtonToBeVisible();
    onInitialSettingsPage.confirmSelection();
    onBookYourTripPage.bookButtonToBeVisible();
    onBookYourTripPage.bookButtonClick();
    onBookYourTripPage.confirmButtonToBeVisible();
    onBookYourTripPage.confirmButtonClick();
    onCompleteYourBookingPage.emailInputToBeVisible();
    onCompleteYourBookingPage.provideEmailIntoInput(bookTripFlowTestData.testUserData.email);
    onCompleteYourBookingPage.saveAndContinueToBeVisible();
    onCompleteYourBookingPage.saveAndContinueClick();
    onCompleteBookingFormPage.formInputsToBeVisible();
    onCompleteBookingFormPage.fillUserDataForm(bookTripFlowTestData.testUserData.firstName, bookTripFlowTestData.testUserData.lastName, bookTripFlowTestData.testUserData.birthDay, bookTripFlowTestData.testUserData.birthYear, bookTripFlowTestData.testUserData.phoneNumber);
    onCompleteBookingFormPage.paymentMethodToBeVisible();
    onCompleteBookingFormPage.selectCashMethodAndConfirm();
  });
});

