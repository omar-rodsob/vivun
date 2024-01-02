describe("Scenario-1 with native assertions", () => {
    it('should validate multiple assertions using native assertions', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('#react-burger-menu-btn').click();
        //error assertion code
        //cy.get('a#inventory_sidebar_link').should('have.text', 'All Item'); //it should be "All Items"
        // should('have.text')
       cy.get('a#inventory_sidebar_link').then($el => {
            cy.softAssert($el.text(), 'All Items', 'The text should be "All Items"');
        });
        cy.get('button#react-burger-cross-btn').click();

        cy.get('button#add-to-cart-sauce-labs-backpack').should('have.text', 'Add to cart');
        cy.get('.app_logo').should('contain', 'Swag Labs');
        cy.get('div#inventory_container').last().should('have.class', 'inventory_container');
        cy.get('.inventory_item').should('have.length', 6);
        cy.get('img[alt="Sauce Labs Backpack"]').should('have.attr', 'src', '/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg');
    });
});