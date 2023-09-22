import { dayTripSelectors } from "../selectors/selectors";

export class completeBookingFormPage{
    formInputsToBeVisible(){
        cy.get(dayTripSelectors.formFirstNameSelector).should('be.visible');
        cy.get(dayTripSelectors.formLastNameSelector).should('be.visible');
        cy.get(dayTripSelectors.birthDaySelector).should('be.visible');
        cy.get(dayTripSelectors.birthMonthSelector).should('be.visible');
        cy.get(dayTripSelectors.birthYearSelector).should('be.visible');
        cy.get(dayTripSelectors.phoneInputSelector).should('be.visible');
    }

    fillUserDataForm(firstName, lastName, birthDay, birthYear, phoneNumber){
        cy.get(dayTripSelectors.formFirstNameSelector).type(firstName);
        cy.get(dayTripSelectors.formLastNameSelector).type(lastName);
        cy.get(dayTripSelectors.birthDaySelector).type(birthDay);
        cy.get(dayTripSelectors.birthMonthSelector).first().click({multiple:true}).click();
        cy.get(dayTripSelectors.birthMonthOptionSelector).click({force:true});
        cy.get(dayTripSelectors.birthYearSelector).type(birthYear);
        cy.get(dayTripSelectors.phoneInputSelector).type(phoneNumber)
    }

    paymentMethodToBeVisible(){
        cy.scrollTo('center');
        cy.contains('Cash').should('be.visible');
    }

    selectCashMethodAndConfirm(){
        cy.contains('Cash').click();
        cy.get(dayTripSelectors.confirmBookingButton).click();
    }
}

export const onCompleteBookingFormPage = new completeBookingFormPage()