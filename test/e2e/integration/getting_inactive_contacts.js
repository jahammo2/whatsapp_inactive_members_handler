describe('WHEN uploading a .txt file', () => {
  describe('AND uploading an excel file', () => {
    describe('AND ', () => {
      it('THEN provides all the inactive contacts', () => {
        cy.visit('/');
        cy.contains('Costing Requests');

        cy.get('[data-testid="txt-file-upload-area"]').attachFile('messages.txt', {
          subjectType: 'drag-n-drop',
        });

        cy.contains('button', 'Submit').click();
        cy.contains('+52 984 801 6878').should('exist');
      });
    });
  });
});
