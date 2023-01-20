/// <reference types="cypress" />

it("Test Assertions", () => {
  cy.visit("https://example.cypress.io/");
  cy.contains("get").click();

  //Implicit assertion
  cy.get("#query-btn")
    .should("contain", "Button") //contain
    .should("have.class", "query-btn") //have class
    // .should("have.text", "query-btn"); //have text
    // .should("have.html", "query-btn"); //have html
    .should("be.visible") //be visible
    .should("be.enabled") //be visible
    // .should("be.disabled"); // be visible
    // .should("be.hidden") //be hidden
    .invoke("attr", "class")
    .should("equal", "query-btn btn btn-primary"); //equal
  // .invoke("attr", "id")
  // .should("equal", "query-btn"); //equal

  //Explicit assertion
  expect(true).to.be.true;

  //assert()

  if (assert.equal(5, 5)) {
    console.log("PASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS");
  } else {
    console.log("false");
  }
});
