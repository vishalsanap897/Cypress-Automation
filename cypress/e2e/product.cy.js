describe('test_case',()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/v1/').wait(5000);
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('.btn_action').contains('LOGIN').click();
    })
    it('TC_01',()=>{
        cy.get('.app_logo').should('be.visible')
    })
    it('TC_02',()=>{
        cy.get('.fa-shopping-cart').should('be.visible');
    })
    it('TC_03',()=>{
        cy.get('.bm-burger-button').should('be.visible');
    })
    it('TC_04',()=>{
        cy.get('.bm-burger-button').click();
    })
    it('TC_05',()=>{
        cy.get('.bm-burger-button').click();
        cy.get('.bm-menu').should('be.visible');

    })
    it('TC_06',()=>{
        cy.get('.bm-burger-button').click();
        cy.get('.bm-cross-button').should('be.visible');
    })
    it('TC_07',()=>{
        cy.get('.bm-burger-button').click();
        cy.get('.bm-cross-button').click();
    })
    it('TC_08',()=>{
        cy.get('.product_sort_container').should('be.visible')
    })
    it('TC_09',()=>{
        cy.get('.product_sort_container').should('be.visible').select('Name (A to Z)');
        cy.get('.product_sort_container').should('be.visible').select('Name (Z to A)');
        cy.get('.product_sort_container').should('be.visible').select('Price (low to high)');
        cy.get('.product_sort_container').should('be.visible').select('Price (high to low)');
    })
    it('TC_10',()=>{
        cy.get('.product_sort_container').select('az',{force:true});
    })
    it('TC_11',()=>{
        cy.get('.product_sort_container').select('za',{force:true});
    })
    it('TC_12',()=>{
        cy.get('.product_sort_container').select('lohi',{force:true})
    })
    it('TC_13',()=>{
        cy.get('.product_sort_container').select('hilo',{force:true})
    })
    it('TC_14',()=>{
        cy.get('.peek').should('be.visible');
    })
    it('TC_15',()=>{
        cy.get('.product_label').should('be.visible');
    })
    // it.only('TC-16',()=>{
    //     cy.get('.product_label').cy.scrollTo(0, 500).scrollIntoView()
    // })
    it.only('TC_16',()=>{
        cy.scrollTo(0, 1500)
    })
    it('TC_17',()=>{
        cy.get('.social_twitter').should('be.visible');
    })
    it('TC_18',()=>{
        cy.get('.social_facebook').should('be.visible');
    })
    it('TC_19',()=>{
        cy.get('.social_linkedin').should('be.visible');
    })
    

})