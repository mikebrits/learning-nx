import { getGreeting } from '../support/app.po';

describe('favourite-word-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Tell us your favourite word?');
  });

  it('should add an item to the list', () => {
    const word = Math.random().toString();
    cy.get('[data-cy=word-input]')
      .type(word);

    cy.get('[data-cy=submit-button]')
      .click();
    
    cy.contains(word);

  })
});
