/// <reference types="cypress" />

import { searchField } from "../page-objects/homePage";

describe('Save search results in dressNames.txt file', () => {
    before (() => {
        cy.visit(Cypress.env("homePage"));
    })
    it('should write search resuluts into dressNames.txt file', () => {
        searchField().type('Printed dresses' + '{enter}');
        cy.get('.product-container > .right-block > h5 > .product-name').then(($el) => {
            const text = $el.text();
            cy.writeFile('cypress/dressNames.txt', text);
        })
      })
})