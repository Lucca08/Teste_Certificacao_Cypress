describe('Certificação - APPRBS', () => {

  beforeEach(() => {
    cy.visit('https://qualidade.apprbs.com.br/certificacao')

    cy.window().its('ActionsForm').should('exist')
  })


it('CT01 - Deve redirecionar após envio com dados válidos', () => {

  cy.get('input[name="pessoa\\.nome"]')
    .type('Lucca QA')

  cy.get('input[name="pessoa\\.telefonePrincipal"]')
    .type('11999999999')

  cy.get('input[name="pessoa\\.emailPrincipal"]')
    .type('lucca@email.com')

  cy.get('#i1nsld').click()

  cy.url().should('not.include', '/certificacao')

})

it('CT02 - Deve validar se pode enviar apenas email', () => {

  cy.get('input[name="pessoa\\.emailPrincipal"]')
    .type('teste@email.com')

  cy.get('#i1nsld').click()

  cy.url().should('not.include', '/certificacao')
})

it('CT03 - Deve exibir mensagem de erro ao sair do campo email vazio', () => {

  cy.get('input[name="pessoa\\.nome"]')
    .type('Lucca QA')

  cy.get('input[name="pessoa\\.telefonePrincipal"]')
    .type('11999999999')

  cy.get('input[name="pessoa\\.emailPrincipal"]')
    .click()
    .blur()

  cy.get('input[name="pessoa\\.emailPrincipal"]')
    .then(($input) => {
      expect($input[0].validationMessage)
        .to.equal('Prencha este campo')
    })

})

  it('Deve carregar a página de Certificação com URL e título válidos', () => {
    cy.url().should('include', '/certificacao')
    cy.title().should('not.be.empty')
  })

  it('Botão superior "Saiba mais" deve redirecionar ao ser clicado', () => {
    cy.contains('Saiba mais')
      .should('be.visible')
      .click()

    cy.url().should('not.include', '/certificacao')
  })

  it('Primeiro botão "Quero me certificar" deve conter link para Rubeus', () => {
    cy.contains('Quero me certificar')
      .should('be.visible')
      .and('have.attr', 'href')
      .and('include', 'rubeus.com.br')
  })

  it('Segundo botão "Quero me certificar" deve conter link para Rubeus', () => {
    cy.get('#i72bga')
      .should('be.visible')
      .and('have.attr', 'href')
      .and('include', 'rubeus.com.br')
  })

  it('Terceiro botão "Quero me certificar" deve conter link válido para Rubeus', () => {
    cy.get('#ixy3u1')
      .should('be.visible')
      .and('have.attr', 'href')
      .and('include', 'rubeus.com.br')
  })

  it('Primeiro botão da seção inferior deve exibir texto "Saiba mais" e conter link válido', () => {
    cy.get('#iqqmxx')
      .should('be.visible')
      .should('contain.text', 'Saiba mais')
      .should('have.attr', 'href')
      .and('include', 'rubeus.com.br')
  })

  it('Segundo botão da seção inferior deve exibir texto padronizado e conter link válido', () => {
    cy.get('#irx8jg')
      .should('be.visible')
      .should('have.text', 'Saiba mais')
      .should('have.attr', 'href')
      .and('include', 'rubeus.com.br')
  })

  it('Terceiro botão da seção inferior deve exibir texto padronizado e conter link válido', () => {
    cy.get('#iz010e')
      .should('be.visible')
      .should('have.text', 'Saiba mais')
      .should('have.attr', 'href')
      .and('include', 'rubeus.com.br')
  })

})