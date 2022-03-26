import indexPage from '../support/Pages/Index';
import articlesPage from '../support/Pages/Articles';
describe('search test cases', () => {
    before(function(){
        cy.log("ejecutando precondiciones a las pruebas");
    })
    after(function(){
        cy.log("ejecutando todas las postcondiciones a las pruebas")
    })
    beforeEach(function(){
        cy.visit('http://automationpractice.com/index.php');
    })
    afterEach(function(){
        cy.log("poniendo datos en su estado original");
    })
    it('search with results', () => {
        indexPage.search('dress');
        cy.LogSpecFormat('searching for dresses');
        articlesPage.verifyArticle('dress');
    });
    it('search with results', () => {
        indexPage.search('hat');
        articlesPage.verifyArticle('hat');
    });
});