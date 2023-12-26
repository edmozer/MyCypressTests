function generateRandomText(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomText = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomText += characters.charAt(randomIndex);
    }
  
    return randomText;
  }

describe

('Página de cadastro', () => 


{
    it('Preencher os campos do formulario corretamente para cadastrar um novo usuário', () => 
    
    
    {
        const randomText = generateRandomText(10);

        cy.visit('https://seubarriga.wcaquino.me/cadastro'); // Link para carregar pagina de cadastro
        cy.get('input[name="nome"]').type('TesteCypressEd'); // Path para o campo nome  
        cy.get('input[name="email"').type(`Ed${randomText}@email.com`); // Path para o campo email
        cy.get('input[name="senha"').type('EdCypress123'); // Path para o campo senha
        cy.get('input[value="Cadastrar"]').click(); // click
        cy.contains('.alert-success', 'Usuário inserido com sucesso').should('be.visible'); // Verificacao de sucesso
    })
  })