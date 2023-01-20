it("LoginTest", () => {
  cy.visit("https://google.com");
  cy.get(".gLFyf").type("Sumanth Sanathi{enter}");
  cy.scrollTo("bottom", { duration: 6000 });
  cy.scrollTo("top", { duration: 6000 });
});
