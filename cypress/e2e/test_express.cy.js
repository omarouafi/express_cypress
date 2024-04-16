
describe('express', () => {
  it('should return Hello World', () => {
    cy.request('http://localhost:3000')
      .its('body')
      .should('eq', 'Hello World');
  });
} );