describe('cart',()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/v1/').wait(5000);
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('.btn_action').contains('LOGIN').click();
    })
    it('TC_01',()=>{
        cy.get('.btn_primary').should('be.visible')
    })
    it('TC_02',()=>{
        cy.get('.btn_primary').contains('ADD TO CART').should('be.visible')
    })
    it.only('TC_03',()=>{
        cy.get('.btn_primary').should('be.visible').click()
    })
})