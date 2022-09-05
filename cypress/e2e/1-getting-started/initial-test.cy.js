/// <reference types="cypress" />

it ('open the app', ()=> {
  cy.visit('localhost:3000')
})

describe('events test', () => {
  it ('navigate to events', ()=> {
    cy.get('[data-test-id="test_headerLinks"]').children().eq(1)
    .should('have.text', 'Events')
    .click()
  })
  it ('check events availability', ()=> {
    cy.get('section')
    .should('have.length', 3)
  })
  it ('check first event item content', ()=> {
    cy.get('section').eq(0).as('eventItem')
  })
})

