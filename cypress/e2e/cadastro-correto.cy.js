describe('Página de cadastro', () => {
  it('Preencher os campos do formulario corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')
    cy.contains('a', 'Register now').click();
    cy.get('[data-test="email"]').type('edmozer.qa@gmail.com')
    cy.get('[data-test="fullName"]').type('Edmozer Cavalcante')
    cy.get('[data-test="registerUserName"]').type('edmozer')
    cy.get('[data-test="registerPassword"]').type('edmozer123')
    cy.contains('button', 'Register').click();
  })
})