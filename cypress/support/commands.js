// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('LogSpecFormat',(textToLog) => {cy.log('==='+textToLog+'===')})
Cypress.Commands.add('tatiana',(value)=>{
    cy.fixture('curso').then((curso)=>{
        cy.get(curso.searchBox).type(value);
        cy.get(curso.searchButton).click();
    })
})
Cypress.Commands.add('ingreso',(value)=>{
    cy.fixture('login').then((login)=>{
            cy.get(login.loginLink).click();
            cy.get(login.Email).type("jeje");
            cy.get(login.password).type('bobi');
            cy.get(login.submit).click();
            cy.get(login.failresult).should('contain','Invalid');
        })
    })

