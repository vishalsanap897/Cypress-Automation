describe('auth',()=>{
    beforeEach(()=>{
        cy.visit('https://development.d2jup677fkamnr.amplifyapp.com/auth/sign-in').wait(5000)
    })
    it('TC_01',()=>{
        cy.get('.ml-2 > b').should('be.visible')
    })
    it('TC_02',()=>{
        cy.get('.font20 > b').should('be.visible')
    })
    it('TC_03',()=>{
        cy.get('.col-12 > :nth-child(2)').should('be.visible')
    })
    it('TC_04',()=>{
        cy.get('.btn_submit_save > span').type(' ');
        cy.get('.btn_submit_save > span').click();
        cy.get('.invalid-feedback > .ng-star-inserted').contains(' Phone Number is required. ')
    })
    it('TC_05',()=>{
        cy.get('#phoneNumber').should('be.visible')
    })
    it('TC_06',()=>{
        cy.get('.btn_submit_save > span').should('be.visible')
    })
    it('TC_07',()=>{
        cy.get('#phoneNumber').type('1234567890')
        cy.get('.btn_submit_save > span').click()
    })
    it('TC_08',()=>{
        cy.get('#otp').should('be.visible')
    })
    it('TC_09',()=>{
        cy.get('#phoneNumber').type('1234567890')
        cy.get('.btn_submit_save > span').click()
        cy.get('#otp').type(' ')
        cy.get('.btn_submit_save > span').click()
    })
    it('TC_10',()=>{
        cy.get('#phoneNumber') .type('1234567890')
        cy.get('.btn_submit_save > span').click()
        cy.get('#otp').type('1234')
        cy.get('.btn_submit_save > span').click()
    })
    it('TC_11',()=>{
        cy.get('#phoneNumber').type('1234567890')
        cy.get('.btn_submit_save > span').click()
        cy.get('.fa').should('be.visible')
    })
    it('TC_12',()=>{
        cy.get('#phoneNumber') .type('1234567890')
        cy.get('.btn_submit_save > span').click()
        cy.get('#otp').type('1234')
        cy.get('.fa').click();     
    })
    it('TC_13',()=>{
        cy.get('.btn_Cancel').should('be.visible')
    })
    it('TC_14',()=>{
        cy.get('#phoneNumber') .type('1234567890')
        cy.get('.btn_Cancel').click()
    })
    it.only('TC_15',()=>{
        cy.get('#phoneNumber') .type('1234567890')
        cy.get('.btn_submit_save > span').click()
        cy.get('#otp').type('1234')
        cy.get('.btn_Cancel').click()
    })
})