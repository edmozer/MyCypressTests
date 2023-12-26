describe('Página de login', () => {

  beforeEach(() => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home')})

    it('Preencher os campos de login corretamente e fazer login', () => {
      cy.login('edmozer', 'edmozer123');
    })
  })