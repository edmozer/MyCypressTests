describe
('Página de cadastro', () => 
    {
        // - Preencher os campos do formulario incorretamente ao cadastrar um novo usuario
    it('Campo email em branco', () =>
        {
        cy.visit('https://seubarriga.wcaquino.me/cadastro'); 
        cy.get('input[name="nome"]').type('TesteCypressEd'); 
        cy.get('input[name="email"').clear();
        cy.get('input[name="senha"').type('EdCypress123'); 
        cy.get('input[value="Cadastrar"]').click(); 
        cy.contains('.alert-danger', 'Email é um campo obrigatório').should('be.visible');
        })

    it('Campo nome em branco', () =>
        {
        cy.visit('https://seubarriga.wcaquino.me/cadastro'); 
        cy.get('input[name="nome"]').clear();
        cy.get('input[name="email"').type('TesteCypressEd@email.com'); 
        cy.get('input[name="senha"').type('EdCypress123'); 
        cy.get('input[value="Cadastrar"]').click(); 
        cy.contains('.alert-danger', 'Nome é um campo obrigatório').should('be.visible');
        })
    it('Campo senha em branco', () =>
        {
        cy.visit('https://seubarriga.wcaquino.me/cadastro'); 
        cy.get('input[name="nome"]').type('EdCypress123');
        cy.get('input[name="email"').type('TesteCypressEd@email.com'); 
        cy.get('input[name="senha"').clear();
        cy.get('input[value="Cadastrar"]').click(); 
        cy.contains('.alert-danger', 'Senha é um campo obrigatório').should('be.visible');
        })
})