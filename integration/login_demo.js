it("test login demo", () => {
  cy.get("https://trytestingthis.netlify.app/");
  cy.get("#uname").type("test");
  cy.get("#pwd").type("test");
  cy.get("[type='submit']").click();
});
