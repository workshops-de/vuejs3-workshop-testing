// https://docs.cypress.io/api/introduction/api.html

describe('Books', () => {
  describe('Opening the app', () => {
    it('provides a link to Books', () => {
      cy.visit('/');
      cy.contains('[data-test=books-navigation]', 'Books');
    });
  });

  describe('When a book is created', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.get('[data-test=book-list__item]').as('books');
    });

    it('shows up in the book list', () => {
      let countBefore = 0;

      cy.get('@books')
        .then(books => (countBefore = books.length))
        .then(() =>
          cy.contains('[data-test=books-navigation]', 'New Book').click()
        )
        .then(() => {
          cy.get('input[name=title]').type('Vue Three');
          cy.get('textarea[name=abstract]').type('Progressive Web Framework');
          cy.get('input[name=author]').type('Evan You');
          cy.get('button[type=submit]').click();
        })
        .then(() =>
          cy.contains('[data-test=books-navigation]', 'Books').click()
        );

      cy.get('@books').then(books =>
        expect(books.length).to.be.greaterThan(countBefore)
      );
    });

    afterEach(() => {
      cy.get('[data-test=book__isbn]')
        .last()
        .then(book => book.text())
        .then(isbn =>
          cy.request('DELETE', `http://localhost:4730/books/${isbn}`)
        );
    });
  });
});
