describe('search elements', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    it('search for elements with multiples results', () => {
        cy.fixture('curso').then((curso)=>{
            cy.get(curso.searchBox).type('dress');
            cy.get(curso.searchButton).click();
            cy.get(curso.searchResults).should('contain','dress');
        })
    })
    it('Search for elements with no results', () => {
        cy.fixture('curso').then((curso)=>{
            cy.get(curso.searchBox).type('qwerly');
            cy.get(curso.searchButton).click();
            cy.get(curso.Alert).should('contain','No results were found for your searchg');
    })
})
})