/// <reference types="cypress" />

export function signInButton() {
    cy.get('.login').click();
}

export function bestSellersButton() {
    cy.get('#home-page-tabs > :nth-child(2) > .blockbestsellers').click();
}
export function popularCategory() {
    return cy.get('#homefeatured');
}

export function bestSellers() {
    return cy.get('#blockbestsellers');
}

export function searchField() {
    return cy.get('#search_query_top');
}

export function logo() {
    cy.get('.logo').click();
}