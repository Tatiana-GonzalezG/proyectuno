describe('Pruebas en sitio Women', () => {
    beforeEach(() => {
        cy.visit("http://automationpractice.com/index.php?id_category=3&controller=category");
    })
    it('large tops search', () => {
        cy.get('#layered_category_4').check();
        cy.get('#layered_id_attribute_group_3').check();
        cy.get('#layered_id_attribute_group_3').uncheck();
        cy.get('#layered_category_4').uncheck();
    });
    it('Order by Highest price', () => {
        cy.get("#selectProductSort").select("Price: Highest first");
    });
    it('Order by stock', () => {
        cy.get("#selectProductSort").select("In stock");
    })
})