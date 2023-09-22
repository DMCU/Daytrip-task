import { dayTripSelectors } from "../selectors/selectors";

export class bookYourTripPage{

    bookButtonToBeVisible(){
        cy.get(dayTripSelectors.bookTripButtonSelector).should('be.visible');
    }

    bookButtonClick(){
        cy.get(dayTripSelectors.bookTripButtonSelector).first().click({force:true});
    }

    confirmButtonToBeVisible(){
        cy.get(dayTripSelectors.confirmButtonSelector).should('be.visible');
    }

    confirmButtonClick(){
        cy.get(dayTripSelectors.confirmButtonSelector).first().click({force:true});
    }

} 

export const onBookYourTripPage = new bookYourTripPage()