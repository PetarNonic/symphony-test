/// <reference types="cypress" />

import { loginEmail, loginPassword, signIn } from "../page-objects/createAccount";
import { logo, searchField, signInButton } from "../page-objects/homePage";
import { addQuantity, addToCart, confirmationBox, confirmOrder, deliveryAddress, dressColor, dressSize, googleBtn, payByBankWire, pinterestBtn, popupColor, popupProceedToCheckout, popupQuantity, popupSize, printedSummerDress, proceedToCheckout, reducedPrice, shareBtn, shippingCosts, termsOfService, totalPrice, tweetBtn } from "../page-objects/printedDresses";
    
describe('Customer is buying a new dress', () => {
    before (() => {
        cy.visit(Cypress.env("homePage"));
        signInButton();
        loginEmail().type(Cypress.env('email'));
        loginPassword().type(Cypress.env('password'));
        signIn();
        logo();
    })
    it('should successfully buy a new dress', () => {
        searchField().type('Printed dresses' + '{enter}');
        printedSummerDress().click();
        tweetBtn().should('exist');
        shareBtn().should('exist');
        googleBtn().should('exist');
        pinterestBtn().should('exist');
        reducedPrice();
        addQuantity().dblclick();
        dressSize().select('M');
        dressColor();
        addToCart();
        popupColor();
        popupSize();
        popupQuantity();
        popupProceedToCheckout();
        totalPrice();
        proceedToCheckout();
        deliveryAddress();
        proceedToCheckout();
        shippingCosts();
        termsOfService();
        proceedToCheckout();
        payByBankWire();
        confirmOrder();
        confirmationBox();
      })
    })