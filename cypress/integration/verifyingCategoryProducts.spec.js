/// <reference types="cypress" />

import { bestSellers, bestSellersButton, popularCategory } from "../page-objects/homePage";

describe('Verifying quantity of the products in a category', () => {
    beforeEach (() => {
        cy.visit(Cypress.env("homePage"));
    })
    it('should verify that the popular category has 7 products', () => {
        popularCategory().children().should('have.length', 7);
      })

    it('should verify that the best sellers category has 7 products', () => {
        bestSellersButton();
        bestSellers().children().should('have.length', 7);
    })
    })