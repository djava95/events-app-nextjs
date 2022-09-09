/// <reference types="cypress" />

before(()=> {
  cy.visit('localhost:3000')
  cy.get('[data-test-id="test_headerLinks"]').children().eq(1)
  .should('have.text', 'Events')
  .click() 
})

describe('events test', () => {
  it.only ('open create event modal', ()=> {
    cy.get('[data-test-id = "create-event-btn"]')
    .should('have.text', 'Add event')
    .click()
    cy.get('[data-test-id = "event-modal"] h2')
    .should('have.text', 'Create a new event')
    cy.get('#name')
    .type('Mega concert')
    cy.get('#type')
    .type('concert')
    cy.get('#artists')
    .type('Metallica')
    cy.get('#genre')
    .type('rock')
    cy.get('#location')
    .type('Los Santos')
    cy.get('.MuiInputAdornment-root button')
    .click()
    cy.get('.MuiPickersDay-root').contains('26')
    .click()
    // cy.get('[data-test-id = "close-modal"]')
    // .click()
    cy.get('#save-event-btn')
  })

  it ('save on missing fields', ()=> {
    cy.get('[data-test-id = "create-event-btn"]')
    .should('have.text', 'Add event')
    .click()
    cy.get('#save-event-btn')
    .click() 
    cy.get('p').contains('Event name is required')
    cy.get('p').contains('Event type is required')
    cy.get('p').contains('Artists name is reqiured')
    cy.get('p').contains('Genre is required')
    cy.get('p').contains('Location is required')
  })
})




