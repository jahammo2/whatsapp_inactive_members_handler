describe('Getting Inactive Contacts', () => {
  describe('WHEN uploading a messages .txt file', () => {
    describe('AND uploading a contacts .txt file', () => {
      describe('AND choosing a start date that can be found in the messages', () => {
        it('THEN provides all the inactive contacts', () => {
          cy.visit('/');
          cy.contains('Export all contacts');

          cy.get('[data-testid="messages-file-upload-area"]').attachFile('messages.txt', {
            subjectType : 'drag-n-drop',
          });

          cy.get('input[data-testid="start-date"]').type('15/06/21');

          cy.get('[data-testid="contacts-file-upload-area"]').attachFile('members.txt', {
            subjectType : 'drag-n-drop',
          });

          cy.get('input[data-testid="starting-unsaved-contact"]').type('+1 (555) 232-6344');

          cy.get('input[type="submit"]').click();

          cy.contains('Test User 3,').should('exist');
          cy.contains('+972 50-555-6588,').should('exist');
          cy.contains('Test User 4').should('exist');
          cy.contains('+1 (555) 232-6344,').should('not.exist');
          cy.contains('+52 1 33 5555 1960,').should('not.exist');
        });
      });

      describe('AND not choosing a start date', () => {
        it('THEN only provides all the contacts who have never been active', () => {
          cy.visit('/');
          cy.contains('Export all contacts');

          cy.get('[data-testid="messages-file-upload-area"]').attachFile('messages.txt', {
            subjectType : 'drag-n-drop',
          });

          cy.get('[data-testid="contacts-file-upload-area"]').attachFile('members.txt', {
            subjectType : 'drag-n-drop',
          });

          cy.get('input[data-testid="starting-unsaved-contact"]').type('+1 (555) 232-6344');

          cy.get('input[type="submit"]').click();

          cy.contains('Test User 3,').should('exist');
          cy.contains('+972 50-555-6588,').should('exist');
          cy.contains('Test User 4').should('not.exist');
          cy.contains('+1 (555) 232-6344,').should('not.exist');
          cy.contains('+52 1 33 5555 1960,').should('not.exist');
        });
      });
    });
  });

  describe('AND not adding a messages file, a contacts file, and a starting contact', () => {
    it('THEN does not show any contacts and shows a helpful messages', () => {
      cy.visit('/');
      cy.contains('Export all contacts');

      cy.get('input[type="submit"]').click();

      cy.contains('You must:');

      cy.contains('Test User 3,').should('not.exist');
      cy.contains('+972 50-555-6588,').should('not.exist');
      cy.contains('Test User 4').should('not.exist');
      cy.contains('+1 (555) 232-6344,').should('not.exist');
      cy.contains('+52 1 33 5555 1960,').should('not.exist');
    });
  });
});
