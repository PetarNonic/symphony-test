/// <reference types="cypress" />

import { additionalInfo, address1, address2, aliasAddress, city, company,
        createAnAccountButton, dateDays, dateMonths, dateYears, 
        email, firstName, genderMale, homePhone, lastName, mobilePhone, 
        newsletter, password, postalCode, registerButton, signOutButton, specialOffers, state } from "../page-objects/createAccount";
import { signInButton } from "../page-objects/homePage";
import { randomRegisterData } from "../support/utils";

const randomData = randomRegisterData();
const faker = require('faker');

let firstNameUser = faker.name.firstName('male');
let lastNameUser = faker.name.lastName();

describe('Successfully creating a new account', () => {
    before (() => {
        cy.visit(Cypress.env("homePage"));
    })
    it('should create a new account', () => {
        cy.url().should('contains', 'http://automationpractice.com/index.php');
        signInButton();
        cy.url().should('contains', 'http://automationpractice.com/index.php?controller=authentication&back=my-account');
        email(randomData.email);
        createAnAccountButton();
        cy.url().should('contains', 'http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation');
        genderMale();
        firstName(firstNameUser);
        lastName(lastNameUser);
        password(Cypress.env('password'));
        dateDays().select('18');
        dateMonths().select("August");
        dateYears().select('1986');
        newsletter();
        specialOffers();
        company().type('Symphony');
        address1().type('Bulevar Medijana 36');
        address2().type('Bulevar vojvode Putnika 34');
        city().type('Niš');
        state();
        postalCode().type('18000');
        additionalInfo().type('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
        homePhone().type('+38118222333');
        mobilePhone().type('+381642233444');
        aliasAddress().clear().type('My home');
        registerButton();
        cy.url().should('contains', 'http://automationpractice.com/index.php?controller=my-account');
        signOutButton();
    })
    })