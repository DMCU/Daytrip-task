import { dayTripSelectors } from "../selectors/selectors";

export class initialSettingsPage{

    destinationsInputsToBeVisible(){
        cy.get(dayTripSelectors.startDestinationInputBeforeClickSelector).should('be.visible');
        cy.get(dayTripSelectors.finalDestinationInputSelector).should('be.visible');
    }

    setDestinations(startDestinantion, finalDestionation){
        cy.get(dayTripSelectors.startDestinationInputBeforeClickSelector).click({multiple:true}).first().type(startDestinantion);
        cy.get(dayTripSelectors.finalDestinationInputSelector).click({multiple:true}).first().type(finalDestionation);
    }

    setTripsStartDate(Day){
        cy.get(dayTripSelectors.departureDatepickerInputSelector).click({multiple:true});
        cy.get(dayTripSelectors.departureDatepickerInputSelector).click({multiple:true});
        cy.get('tr').contains(Day).click({multiple:true});
        cy.scrollTo('top')
        cy.wait(3000);
    }

    confirmSelectionButtonToBeVisible(){
        cy.get(dayTripSelectors.searchButtonSelector).should('be.visible');
    }

    confirmSelection(){
        cy.get(dayTripSelectors.searchButtonSelector).first().click({multiple:true});
        cy.wait(3000);
    }

}

export const onInitialSettingsPage = new initialSettingsPage()