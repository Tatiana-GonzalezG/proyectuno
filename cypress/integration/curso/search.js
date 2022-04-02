describe('search elements', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    it('search for elements with multiples results', () => {
        cy.fixture('curso').then((curso)=>{
            cy.tatiana("dress");
            cy.get(curso.searchResults).should('contain','dress');
        })
    })
    it('Search for elements with no results', () => {
        cy.fixture('curso').then((curso)=>{
            cy.tatiana('banano');
            cy.get(curso.Alert).should('contain','No results were found for your search');
    })
})
})