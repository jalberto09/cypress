describe('Set de pruebas 1', () => {
  it('Prueba 1', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get("#login-button").click()
  })
})