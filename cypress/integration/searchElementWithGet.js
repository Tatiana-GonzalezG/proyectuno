describe('formas de encontrar un elemento', () => {
    it('buscar en el buscador', () => {
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.search_query.form-control.ac_input').type('hola ');
        cy.get('#search_query_top').type('como te va ');
        cy.get('[name=search_query]').type('chaito ');
        cy.get('[placeholder="Search"]').clear();
    });
});