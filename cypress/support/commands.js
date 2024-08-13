import {common} from './commonPageElements'
const Common = new common()

Cypress.Commands.add('goToHomepage', () => {
  cy.visit(Cypress.env().urls.baseUrl)
  cy.url().should('include', 'aloware.com')
  cy.wait(2000)
  cy.get('.big-badges').click()
  cy.get('body').then($body => {
    if ($body.find('#hs-eu-cookie-confirmation-inner')) {
      cy.get('#hs-eu-confirmation-button').click()
    }
  })
  cy.get('#hs-eu-confirmation-button').should('not.be.visible')
})

Cypress.Commands.add('goToSignUpPage', function () {
  cy.visit(Cypress.env().urls.signUpUrl)
  cy.wait(2000)
  cy.get('.big-badges').click()
  cy.get('body').then($body => {
    if ($body.find('#hs-eu-cookie-confirmation-inner').length > 0) {
      cy.get('#hs-eu-confirmation-button').click()
    }
  })
  cy.url().should('include', '/signup')
  Common.h3Text().contains('Welcome to Aloware').should('be.visible')
})
