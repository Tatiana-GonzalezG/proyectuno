class articlesPage{
    verifyArticle = (article) =>{
        cy.fixture('Article.json').then((locators)=>{
            cy.get(locators.banner).contains(article)
    })
    }
}
export default new articlesPage();