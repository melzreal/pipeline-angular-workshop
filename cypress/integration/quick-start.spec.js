context('Quick Start', () => {
	it('opens the quick start guide', () => {
		cy.visit('/');
		cy.get('body').contains('Welcome');
		cy.get('body > app-root > div.content').contains('ng generate component xyz');
		
		

	})
});

