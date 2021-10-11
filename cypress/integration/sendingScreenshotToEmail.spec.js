/// <reference types="cypress" />

const nodemailer = require('nodemailer')

describe('Sending a screenshot of a failed test to an email', () => {
    before (() => {
        cy.visit(Cypress.env("homePage"));
    })
    it('should make a screenshot and send it to an email', () => {
        cy.url().should('contains', 'http://automationpractice.com/index.php?id_category=5&controller=category')
        })
    after (() => {
        cy.screenshot('cypress/failedTest');
    })
      })