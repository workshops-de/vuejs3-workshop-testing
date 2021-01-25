// https://docs.cypress.io/api/introduction/api.html

describe('Books', () => {
  describe('Opening the app', () => {
    it('provides a link to Books', () => {
      cy.visit('/');
      cy.contains('[data-test=books-navigation]', 'Books');
    });
  });
});
