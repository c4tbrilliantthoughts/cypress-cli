// it("Test ESPN", () => {
//   cy.visit("https://www.espncricinfo.com/");
//   cy.get(":nth-child(3) > .nav-link > div").click();
//   cy.get(":nth-child(11) > .nav-link").click();
// });

describe("Filter", () => {
  it.only("To check records", () => {
    cy.visit("https://www.espncricinfo.com/");
    cy.get(":nth-child(3) > .nav-link > div").click();
    cy.get(":nth-child(11) > .nav-link").click();
  });
});
