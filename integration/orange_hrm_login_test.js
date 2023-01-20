/// <reference types="cypress" />
import { LoginPage } from "../pages/login_page";

const loginPage = new LoginPage();

it.only("Ornage HRM", () => {
  loginPage.navigate();
  cy.get("#txtUsername").type("admin");
  cy.get("#txtPassword").type("admin123");
  cy.wait(2000);

  //click login Button
  cy.get("#btnLogin").click();
  //click Admin page button
  cy.get("#menu_admin_viewAdminModule > b").click();
  //click add new user
  cy.get("div.top").find("#btnAdd").click();
  //Employee Details
  cy.get("#systemUser_employeeName_empName").type("Admin A{enter}");
  cy.get("#systemUser_userName").type("sumanth123456");
  cy.get("#systemUser_password").type("admin123!@#$");
  cy.get("#systemUser_confirmPassword").type("admin123!@#$");
  cy.get(".inner").find("#btnSave").click();
  cy.wait(5000);
  cy.get("#searchSystemUser_userName").type("sumanth123456");
  cy.get("#searchBtn").click();
  cy.get(".odd > :nth-child(2) > a").click();
  cy.get("#btnSave").click();
  cy.get("#systemUser_userName").type("sumanth123456");
  cy.get(".inner").find("#btnSave").click();
  cy.get("#searchSystemUser_userName").type("sumanth12345");
  cy.get("#searchBtn");
});

// it("Google Search", () => {
//   cy.visit("https://www.google.com/");
//   cy.get(".gLFyf").type("google{enter}");
// });
 v