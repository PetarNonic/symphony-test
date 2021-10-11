/// <reference types="cypress" />

export function results() {
    cy.get('.product-container > .right-block > h5 > .product-name');
}

export function printedSummerDress() {
    return cy.get('.first-in-line.first-item-of-tablet-line > .product-container > .right-block > h5 > .product-name');
}

export function tweetBtn() {
    return cy.get('.btn-twitter');
}

export function shareBtn() {
    return cy.get('.btn-facebook');
}

export function googleBtn() {
    return cy.get('.btn-google-plus');
}

export function pinterestBtn() {
    return cy.get('.btn-pinterest');
}

export function reducedPrice() {
    cy.get('#reduction_percent_display').should('have.text','-5%');
}
export function addQuantity() {
    return cy.get('.button-plus > span');
}

export function dressSize() {
    return cy.get('#group_1');
}

export function dressColor() {
    cy.get('#color_14').click();
}

export function addToCart() {
    cy.get('.exclusive > span').click();
}

export function popupColor() {
    cy.contains('#layer_cart_product_attributes', 'Blue');
}

export function popupSize() {
    cy.contains('#layer_cart_product_attributes', 'M');
}

export function popupQuantity() {
    cy.contains('#layer_cart_product_quantity', '3')
}

export function popupProceedToCheckout() {
    cy.get('.button-medium > span').click();
}

export function totalPrice() {
    cy.contains('#total_price', '$88.94');
}

export function proceedToCheckout() {
    cy.get('.cart_navigation > .button > span').click();
}

export function deliveryAddress() {
    cy.contains('#address_delivery > .address_address1', 'Bulevar');
}

export function shippingCosts() {
    cy.contains('td.delivery_option_price > .delivery_option_price', '$2.00');
}

export function termsOfService() {
    cy.get('#cgv').check();
}

export function payByBankWire() {
    cy.get('.bankwire').click();
}

export function confirmOrder() {
    cy.get('#cart_navigation > .button > span').click();
}

export function confirmationBox() {
    cy.contains('.box', 'Your order on My Store is complete.');
}