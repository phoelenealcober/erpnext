import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor"

Given ('I am on on the Login page', () => {
    cy.viewport(1440, 705)
    cy.visit('/')
});

When('When I login an invalid credentials', (datable) => {
    datable.hashes().forEach((el) => {
        cy.get('#login_email').clear();
        cy.get('#login_email').type(el.email);
        cy.get('#login_password').clear();
        cy.get('#login_password').type(el.password);
        cy.get('.btn-login').click();
    })
});

Then('I should see an error', () => {
    cy.wait(2000)
    cy.get('.btn-login').should('have.html', 'Invalid Login. Try again.')
});

When('When I login a valid credentials', (datable) => {
    datable.hashes().forEach((el) => {
        cy.get('#login_email').clear();
        cy.get('#login_email').type(el.email);
        cy.get('#login_password').clear();
        cy.get('#login_password').type(el.password);
        cy.get('.btn-login').click();
    })
});

Then('I should redirect to home page', () => {
    cy.wait(5000)
    cy.url().should('include', '/app')
    cy.get('.page-title').contains('Home')
});

When('I successfully login', (datable) => {
    datable.hashes().forEach((el) => {
        cy.get('#login_email').clear();
        cy.get('#login_email').type(el.email);
        cy.get('#login_password').clear();
        cy.get('#login_password').type(el.password);
        cy.get('.btn-login').click();
        cy.wait(5000)
    })
});

Then('I should be redirected to homepage', () => {
    
    cy.url().should('include', '/app')
    cy.get('.page-title').contains('Home')
});

When('I go to My Settings', () => {
    cy.get('.avatar-frame').click();
    cy.get('[onclick="return frappe.ui.toolbar.route_to_user()"]').click();    
});

Then('I should be redirected to settings page', () => {
    cy.url().should('include', '/app/user')
    cy.wait(5000)
});

When('I enter a sequenced password', (data) => {
    cy.get('.section-head').contains('Change Password').click();
    data.hashes().forEach((pw) => {
        cy.get('input[type=password]').type(pw.password);
        cy.get('[data-label="Save"]').click();
        cy.wait(5000)
    })
});

Then('I should see an error message', () => {
    cy.get('.msgprint').should('include.text','Avoid sequences')
    cy.get('[data-dismiss="modal"]').click();
    
});

When('I enter a common password', (data) => {
    data.hashes().forEach((pw) => {
        cy.get('input[type=password]').clear();
        cy.get('input[type=password]').type(pw.password);
        cy.get('[data-label="Save"]').click();
        cy.wait(5000)
    })
});

Then('I should see an error msg', () => {
    cy.get('.msgprint').should('include.text','commonly used password')
    cy.get('[data-dismiss="modal"]').click();
});

When('I enter a valid password', (data) => {
    data.hashes().forEach((pw) => {
        cy.get('input[type=password]').clear();
        cy.get('input[type=password]').type(pw.password);
        cy.get('[data-label="Save"]').click();
    })
});

Then('New password should be saved', () => {
    cy.get('.alert-message').should('include.text','Saved')
});


