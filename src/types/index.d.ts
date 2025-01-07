declare global {
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Chainable<Subject> {
      /**
       * Should login
       * @param user
       * @example cy.login()
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      login(user?: string): Chainable<any>;
    }
  }
}
