
const datos = require('/Users/leonardo/Proyectos VS Code/Cypres/Test_cypress_crux_web/arrayData.json')


describe('test login', () => {
    
    beforeEach(()=>{
        cy.visit('http://64.225.82.59:8080/login')

    })
    datos.forEach(test => {
        it('test de credenciales incorrectas',()=>{
        cy.get('#name').type(test.email)
        cy.get('#password').type(test.passwoord)
        cy.get('.btn').click()
        cy.wait(3000)
        })
    })
    it('test de credenciales correctas y cierre de sesion',()=>{
        //?correo usuario
        cy.get('#name').type('rhuilcaleo@helpcom.cl')
        //?contraseña usuario
        cy.get('#password').type('rigo')
        //?Boton iniciar sesion 1
        cy.get('.btn').click()
        //?input "select"
        cy.get('.el-input__inner').click()
        //?lista de opciones, click en 1 elemento ("helpcom")
        cy.get('.el-scrollbar__view > :nth-child(1)').click()
        //?Click en boton iniciar sesion 2
        cy.get('.card-body > .row > div > .btn').click()
        cy.wait(3000)
        //?cerrar sesion
        cy.get('.container-fluid > :nth-child(9)').click()

    })
    it('cy.request() - test request 200', () => {
        // https://on.cypress.io/request
        cy.request('http://64.225.82.59:8080/login')
          .should((response) => {
            expect(response.status).to.eq(200)
          
          })
      })
})


