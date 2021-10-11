/// <reference types="cypress" />

//The browser window maximization is set in cypres.json congif file

describe('Navigating to a URL', () => {
    it('should navigate the user to a specific URL', () => {
        cy.visit(Cypress.env("homePage"));
        cy.url().should('contains', 'http://automationpractice.com/index.php')
    })
    })