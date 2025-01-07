describe('favorite flow spec', () => {
  it('passes', () => {
    cy.intercept('GET', 'https://gateway.marvel.com/v1/public/characters*', (req) => {
      req.reply({
        statusCode: 200,
        fixture: 'characters.json',
      });
    }).as('marvelCharacters');

    cy.visit('http://localhost:5173/');

    cy.wait('@marvelCharacters');

    cy.get('[data-testid="cypress-title"]')
      .should('exist')
      .should('have.text', 'explore o universo');

    cy.get('[data-testid="cypress-subtitle"]')
      .should('exist')
      .should(
        'have.text',
        'Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!',
      );

    cy.get('[data-testid="cypress-button-filter-favorite"]')
      .should('exist')
      .should('have.text', 'Somente favoritos')
      .within(() => {
        cy.get('img').should('have.attr', 'alt').and('include', 'Filtrar por favoritos');

        cy.get('img').click();

        cy.get('img')
          .should('have.attr', 'alt')
          .and('include', 'Não filtrar por favoritos');

        cy.get('img').click();
      });

    cy.get('[data-testid="cypress-hero-card"]').should('exist');

    cy.get('[data-testid="cypress-hero-card-button-favorite"]').first().click();

    cy.get('[data-testid="cypress-button-filter-favorite"]').first().click();

    cy.get('[data-testid="cypress-hero-card"]').within(() => {
      cy.get('[data-testid="cypress-hero-card-img-favorite"]')
        .should('exist')
        .should('have.attr', 'alt', 'Favorito');
    });
  });
});
