//to allow cypress commands from cypress library
/// <reference types="cypress" />

it("Google Search", () => {
  cy.visit("https://www.google.com/");
  cy.get(".gLFyf").type("google{enter}");
  cy.contains("Videos").click();
  // cy.wait(5000);
  // // cy.get("[data-hveid='CAgQAA'] > .tF2Cxc > .yuRUbf > a > .LC20lb").click();
  // cy.get(
  //   '[data-hveid="CAUQAA"] > .tF2Cxc > .yuRUbf > a > .TbwUpd > .iUh30'
  // ).click();
});
