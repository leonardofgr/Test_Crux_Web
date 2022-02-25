/// <reference types="Cypress" />


describe('test login', () => {
    
    it('test de credenciales correctas y cierre de sesion',()=>{
        cy.visit('http://64.225.82.59:8080/login')
        //?prueba de la funcion intercept
        
        //?correo usuario
        cy.get('#name').type('rhuilcaleo@helpcom.cl')
        //?contraseña usuario
        cy.get('#password').type('rigo')
        //?Boton iniciar sesion 1
        cy.get('.btn').should("be.visible").click()
        //?input "select"
        cy.get('.el-input__inner').should("be.visible").click()
        //?lista de opciones, click en 1 elemento ("helpcom")
        cy.get('.el-scrollbar__view > :nth-child(1)').click()
        //?Click en boton iniciar sesion 2
        cy.get('.card-body > .row > div > .btn').click()
        cy.wait(3000)
        //?cerrar sesion
        cy.get('.container-fluid > :nth-child(9)').should("be.visible").click()

    })
    
})