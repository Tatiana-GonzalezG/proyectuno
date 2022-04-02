class indexPage{
    search = (Element) =>{
            cy.fixture('index.json').then((locators)=>{
                cy.get(locators.searchInput).type(Element);
                cy.get(locators.searchButton).click();
            })
            
    }
}
export default new indexPage();