
describe('Prueba en http://64.225.82.59:8080/departamentos', () => {
    
    it('Navegacion dentro del menu compras/departamentos', () => {
     
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
        cy.get('.el-scrollbar__view > :nth-child(1)').click()
        
        //?Click en boton iniciar sesion 2
        cy.get('.card-body > .row > div > .btn').click({force:true})
        cy.wait(3000)
        
        //?lista de opciones laterales /compras
        cy.get(':nth-child(3) > .el-sub-menu__title > span').click({force:true})
        
        //?click el submenu departamentos
        cy.get('.is-opened > .el-menu > :nth-child(2) > span').click({force:true})
        .should('have.text','Departamentos')
        cy.get('.card-header').should('have.text','Departamentos')

        //?click en boton nuevo
        cy.get('.cell > .btn').click().should('be.visible')

        //?prueba de escritura en input
        cy.get('.el-form-item__content > .el-input > .el-input__inner')
        .type('Prueba Cy 1')
        
        //?Boton crear
        cy.get('.d-grid > .btn').click()
         
        //?Modificar departamento recien creado
        cy.xpath("//tbody/tr[7]/td[5]/div[1]/div[1]/button[1]/*[1]").click({force:true})
        cy.xpath("//body/div[@id='app']/section[1]/section[1]/main[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[2]/div[1]/div[1]/input[1]").type('Depto modificado')
        
        //?Guardar depto modificado
        cy.get('.el-form-item__content > .btn').click()
   

       })

        
})
