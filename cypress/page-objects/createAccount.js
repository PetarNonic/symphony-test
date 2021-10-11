/// <reference types="cypress" />

export function email(randomDataEmailParam) {
    cy.get('#email_create').type(randomDataEmailParam);
}

export function loginEmail() {
  return cy.get('#email');
}

export function loginPassword() {
  return cy.get('#passwd');
}

export function signIn() {
  cy.get('#SubmitLogin > span').click();
}

export function createAnAccountButton() {
  cy.get('#SubmitCreate > span').click();
}

export function genderMale() {
  cy.get('#id_gender1').check();
}

export function firstName(firstNameParam) {
  cy.get('#customer_firstname').type(firstNameParam);
}

export function lastName(lastNameParam) {
  cy.get('#customer_lastname').type(lastNameParam);
}

export function password(passwordParam) {
  cy.get('#passwd').type(passwordParam);
}

export function dateDays() {
  return cy.get('#days');
}

export function dateMonths() {
  return cy.get('#months');
}

export function dateYears() {
  return cy.get('#years');
}

export function newsletter() {
cy.get('#newsletter').check();
}

export function specialOffers() {
cy.get('#optin').check();
}

export function company() {
return cy.get('#company');
}

export function address1() {
  return cy.get('#address1');
  }

export function address2() {
  return cy.get('#address2');
  }

export function city() {
  return cy.get('#city');
  }

export function state() {
  cy.get('#id_state').select('California');
  }

export function postalCode() {
  return cy.get('#postcode');
}

export function additionalInfo() {
  return cy.get('#other');
}

export function homePhone() {
  return cy.get('#phone');
}

export function mobilePhone() {
  return cy.get('#phone_mobile');
  }

export function aliasAddress() {
  return cy.get('#alias');
}

export function registerButton() {
  cy.get('#submitAccount > span').click();
}

export function signOutButton() {
  cy.get('.logout').should('exist');
}