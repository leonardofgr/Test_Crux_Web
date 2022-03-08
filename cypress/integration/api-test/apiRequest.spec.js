describe('Prueba de api',()=>{
   
    it('make an XHR request', () => {
      
        cy.request('http://64.225.82.59:8080/login')
         .should((response) => {
          expect(response.status).to.eq(200)
          expect(response).to.have.property('headers')
          expect(response).to.have.property('duration')
         }) 
         .its('body')
         cy.window().its('sessionStorage')
    })
})