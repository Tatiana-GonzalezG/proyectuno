describe('login', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    it('Login with an incorrect email', () => {
        cy.ingreso();
        
    });
});