class indexPage{
    constructor(){
        this.searchInput = '#search_query_top';
        this.searchButton = '#searchbox > .btn';
    }

    search = (Element) =>{
            cy.get(this.searchInput).type(Element);
            cy.get(this.searchButton).click();
    }
}
export default new indexPage();