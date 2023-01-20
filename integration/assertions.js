it("Learn Assertions", () => {
  cy.visit("https://example.cypress.io/");
  cy.
  var name = cy.contains("get");
  name.click();
  cy.
  cy.get("#query-btn")
    .should("contain", "Button")
    .should("have.class", "query-btn")
    // .should("have.text", "query-btn")
    // .should("have.html", "query-btn");
    .should("be.visible")
    .should("be.enabled");
  // .should("be.disabled");
  cy.get("#query-btn").invoke("attr", "id").should("equal", "query-btn");
  cy.get("#query-btn")
    .should("contain", "Button")
    .and("have.class", "query-btn");
  cy.in
  //Explicit Assertions
  expect(true).to.be.true;
  let myName = "Sumanth";
  expect(myName).to.be.equal("Sumanth");

  //assert.equal
  assert.equal(4, "4", "Not Equal is given input");
  assert.strictEqual(4, "4", "Not Equal is given input");
});
