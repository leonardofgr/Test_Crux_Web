
describe('Prueba en http://64.225.82.59:8080/linea_productos', () => {
    
    it('Navegacion dentro del menu compras/linea de productos', () => {
     
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
        
        //?seleccion linea de productos
        cy.get('.is-opened > .el-menu > :nth-child(3) > span').click({force:true})
        .should("be.visible")
        cy.wait(3000)

        //? boton Nuevo
        cy.get('.cell > .btn').click({force:true})
        cy.contains('Nuevo')
      
        //?campos input
        cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner').type('Nombre')
        cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner').type('12')
        cy.get('.el-form-item__content > .el-select > .select-trigger > .el-input > .el-input__inner')
        .click()
        cy.xpath("//span[contains(.,'Panaderia')]").click().first()
        cy.get('.d-grid > .btn').click()

        //?Eliminar elemento
        cy.get(':nth-child(1) > .el-table_1_column_7 > .cell > .btn-group > .btn-danger > .svg-inline--fa > path').click({force:true})
        
        //?Venta emergente de advertencia
        cy.get('.swal2-confirm').click()
        cy.wait(3000)
        //?Segunda ventana de emergencia, sugiero elimnarla y desplazar el mensaje de advertencia a al primera ventana.
        cy.get('.swal2-confirm').click()
        cy.wait(1000)
        
        /*Edicion del elemento
        cy.get('.btn-group > .btn-crux > .svg-inline--fa').click({force:true})
        cy.get(':nth-child(2) > .el-form-item__content > .el-input > .el-input__inner')
        .clear()
        .type('22')
        cy.get('.d-grid > .btn').click()
        */

        

       })

        
})
