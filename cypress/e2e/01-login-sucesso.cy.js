describe

('Página de login', () => 


{
    it('Preencher os campos do formulario corretamente para logar', () => 
    
    
    {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home'); // Link para carregar pagina de login
      cy.get('[ng-reflect-name="userName"]').type('camcammaroka');
      cy.get('[data-test="loginPassword"]').type('bibola&william');
      cy.get('[data-test="loginBtn"]').click();
      cy.contains('a', 'camcammaroka');
    
    })
  })