describe('Formulário cadastro', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Usuário deve conseguir se cadastrar com sucesso', () => {
    const randomName = `user-test-${Math.floor(Math.random() * 10000)}`;
    const randomEmail = `email-test-${Math.floor(
      Math.random() * 10000
    )}@example.com`;

    cy.getByData('botao-cadastro').click();
    cy.getByData('nome-input').type(randomName);
    cy.getByData('email-input').type(randomEmail);
    cy.getByData('senha-input').type('123');
    cy.getByData('checkbox-input').click();
    cy.getByData('botao-enviar').click();

    cy.getByData('mensagem-sucesso')
      .should('exist')
      .and('have.text', 'Usuário cadastrado com sucesso!');
  });
});
