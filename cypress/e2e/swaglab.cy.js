describe('template spec', () => {
   it.only('swag-labs', () => {
      cy.visit('https://www.saucedemo.com/v1/').wait(5000)
      cy.get('.login_logo').should('be.visible');
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').contains('LOGIN').click();

      cy.get('.btn_primary').contains('ADD TO CART').click();
      cy.get('.btn_inventory').contains('ADD TO CART').click();
      cy.get('.product_sort_container').select('Name (Z to A)');
      cy.get('.fa-shopping-cart').click(1);
      cy.get('.checkout_button').contains('CHECKOUT').click();
      cy.get('.cart_cancel_link ').contains('CANCEL').click();
      cy.get('.checkout_button').contains('CHECKOUT').click();
      // cy.get('#first-name').type('ajinkya');
      // cy.get('#last-name').type('nehe');
      // cy.get('#postal-code').type('457834');

      // cy.get('.cart_button').contains('CONTINUE').click();
      // cy.get('.cart_button').contains('FINISH').click();



   });


   it('TC', () => {
      cy.visit('https://www.saucedemo.com/v1/').wait(5000)
   })
   it('TC_01', () => {
      cy.visit('https://www.saucedemo.com/v1/').wait(5000)
      cy.get('[data-test="username"]').should('be.visible').type(' ');
      cy.get('#login-button').click();
      cy.get('[data-test="error"]').contains('Epic sadface: Password is required');

   })
   it('TC_02', () => {
      cy.visit('https://www.saucedemo.com/v1/').wait(5000)
      cy.get('[data-test="password"]').should('be.visible').type(' ');
      cy.get('#login-button').click();
      cy.get('[data-test="error"]').contains('Epic sadface: Username is required');

   })
   it('TC_03', () => {
      cy.visit('https://www.saucedemo.com/v1/').wait(5000)
      cy.get('[data-test="username"]').should('be.visible').type(' ');
      cy.get('[data-test="password"]').should('be.visible').type(' ');
      cy.get('#login-button').click();
      cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')
   })
   it('TC_04', () => {
      cy.visit('https://www.saucedemo.com/v1/').wait(5000)
      cy.get('[data-test="username"]').should('be.visible').type('vishal');
      cy.get('[data-test="password"]').should('be.visible').type('sanap');
      cy.get('#login-button').click();
      cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')
   })
   it('TC_05', () => {
      cy.visit('https://www.saucedemo.com/v1/').wait(5000)
      cy.get('[data-test="username"]').should('be.visible').type('2574637256');
      cy.get('#login-button').click();
   })
   it('TC_06', () => {
      cy.visit('https://www.saucedemo.com/v1/').wait(5000)
      cy.get('.bot_column').should('be.visible');
      cy.get('#login-button').click();
      cy.get('[data-test="error"]').contains('Epic sadface: Username is required');
   })
   it('TC_07', () => {
      cy.visit('https://www.saucedemo.com/v1/').wait(5000)
      cy.get('[data-test="password"]').should('be.visible').type('734262438743');
      cy.get('#login-button').click();
      cy.get('[data-test="error"]').should('have.text','Epic sadface: Username is required');

   })
   it('TC_08', () => {
      cy.visit('https://www.saucedemo.com/v1/').wait(5000)
      cy.get('[data-test="username"]').should('be.visible').type('ajinkya');
      cy.get('[data-test="password"]').should('be.visible').type(' ');
      cy.get('#login-button').click();
      cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')
   })

   it('TC_09', () => {
      cy.visit('https://www.saucedemo.com/v1/').wait(5000)
      cy.get('[data-test="username"]').should('be.visible').type(' ');
      cy.get('[data-test="password"]').should('be.visible').type('nehe');
      cy.get('#login-button').click();
      cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')
   })

   it('TC_10', () => {
      cy.visit('https://www.saucedemo.com/v1/').wait(5000)
      cy.get('[data-test="username"]').should('be.visible').type('548353 ');
      cy.get('[data-test="password"]').should('be.visible').type('2347843');
      cy.get('#login-button').click();
      cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')
   })
});

