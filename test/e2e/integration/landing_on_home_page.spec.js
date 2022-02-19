describe('WHEN landing on the homepage', () => {
  it('THEN shows content on the homepage', () => {
    cy.visit('/');
    cy.contains('Costing Requests:');
  });
});
