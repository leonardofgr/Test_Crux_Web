
describe('Prueba en http://64.225.82.59:8080/marcas', () => {
    
    it('Navegacion dentro del menu compras/marcas', () => {
     
        cy.visit('http://64.225.82.59:8080/login')
        
        //?correo usuario
        cy.get('#name').type('rhuilcaleo@helpcom.cl')
        //?contraseña usuario
        cy.get('#password').type('rigo')
        
        //?Boton iniciar sesion 1
        cy.get('.btn').should("be.visible")
        .click()
        
        //?input "select"
        cy.get('.el-input__inner').should("be.visible").click()
        
        //?lista de opciones, click en 1 elemento ("helpcom")
        cy.get('.el-scrollbar__view > :nth-child(1)').click({force:true})
        
        //?Click en boton iniciar sesion 2
        cy.get('.card-body > .row > div > .btn').click({force:true})
        cy.wait(3000)
        
        //?lista de opciones laterales /compras
        cy.get(':nth-child(3) > .el-sub-menu__title > span').click({force:true})
        
        //?Sub-menu lateral marcas
        cy.get('.is-opened > .el-menu > :nth-child(4)').click()
        
        //?Nueva marca
        cy.get('.cell > .btn').click()
        cy.wait(3000)
        //?Nombre marca
        cy.get('.el-form-item__content > .el-input > .el-input__inner').type('Apol')

        //?Crear nueva marca
        cy.get('.d-grid > .btn').click()

        //?Eliminar marca
        cy.get(':nth-child(5) > .el-table_1_column_5 > .cell > .btn-group > .btn-danger').click()

        //?Ventana emergente de advertencia
        cy.get('.swal2-confirm').click()
       })

        
})
