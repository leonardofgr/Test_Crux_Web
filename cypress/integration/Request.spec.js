describe('test de respuesta y status', () => {
    
    it('cy.request() - test request 200', () => {
        // https://on.cypress.io/request
        cy.request('http://64.225.82.59:8080/login')
          .should((response) => {
            expect(response.status).to.eq(200)
          
          })
        })
    })