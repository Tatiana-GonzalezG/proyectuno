describe('escribir en busqueda varios strigns', () => {
    it('vamos a escribir y limpiar', () => {
        cy.visit('http://automationpractice.com/index.php');
        // cy.get('#search_query_top').clear();
        // cy.get('#search_query_top').type("hola");
        // cy.get('#search_query_top').clear();
        // cy.get('#search_query_top').type("bien o k");
        cy.get('#search_query_top').clear().type("hola").clear().type("como shta");
    });
});