describe

('Página de cadastro', () => 


{
    it('Preencher os campos do formulario corretamente para cadastrar um novo usuário', () => 
    
    
    {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home/signup'); // Link para carregar pagina de cadastro
      cy.get('[data-test="email"]').type('camilatfer@gmail.com');
      cy.get('[formcontrolname=fullName]').type('Camila Cavalcante');
      cy.get('[ng-reflect-name="userName"]').type('camcammaroka');
      cy.get('[placeholder="password"]').type('bibola&william');
      cy.contains('button', 'Register').click();
    
    })
  })