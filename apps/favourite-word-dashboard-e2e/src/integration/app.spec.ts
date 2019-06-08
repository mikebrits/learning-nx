import { getGreeting } from '../support/app.po';

describe('favourite-word-dashboard', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to favourite-word-dashboard!');
  });
});
