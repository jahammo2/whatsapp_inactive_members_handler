describe('WHEN uploading a .txt file', () => {
  describe('AND uploading an excel file', () => {
    describe('AND choosing a start date that can be found in the messages', () => {
      it('THEN provides all the inactive contacts', () => {
        cy.visit('/');
        cy.contains('Export all contacts');

        cy.get('[data-testid="messages-file-upload-area"]').attachFile('messages.txt', {
          subjectType: 'drag-n-drop',
        });

        cy.get('input[data-testid="start-date"]').type('15/06/21');

        cy.get('[data-testid="contacts-file-upload-area"]').attachFile('members.txt', {
          subjectType: 'drag-n-drop',
        });

        cy.get('input[type="submit"]').click();
        // cy.contains('button', 'Submit').click();
        cy.contains('Test User 3').should('exist');
        cy.contains('+972 50 555 6588').should('exist');

        cy.contains('Test User 4').should('exist');
      });
    });
  });
});
