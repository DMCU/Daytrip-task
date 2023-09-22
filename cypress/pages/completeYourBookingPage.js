import { dayTripSelectors } from "../selectors/selectors";

export class completeYourBookingPage{

    emailInputToBeVisible(){
        cy.get(dayTripSelectors.emailInputSelector).should('be.visible');
        cy.wait(2000);
    }

    saveAndContinueToBeVisible(){
        cy.get(dayTripSelectors.saveAndContinueButtonSelector).should('be.visible');
    }

    provideEmailIntoInput(email){
        cy.get(dayTripSelectors.emailInputSelector).type(email);
    }

    saveAndContinueClick(){
        cy.get(dayTripSelectors.saveAndContinueButtonSelector).first().click({force:true});
    }

}

export const onCompleteYourBookingPage = new completeYourBookingPage()