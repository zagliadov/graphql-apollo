/* eslint-disable no-undef */
describe("My First Test", () => {
  it('finds the content "type"', () => {
    // cy.visit('https://example.cypress.io')

    cy.visit("http://localhost:3000/");
    cy.contains("Leanne Graham").click();
    cy.url().should("include", "/user/1");
    cy.visit("http://localhost:3000/");
    cy.get(".sc-eCImPb").click();

    cy.get("input").first()
      .type("Jane Dow")
      .should("have.value", "Jane Dow")
      .next().type('Janee').should('have.value', 'Janee')
      .next().type('Jane@email.com').should('have.value', 'Jane@email.com')
      .next().click()
  });
});
