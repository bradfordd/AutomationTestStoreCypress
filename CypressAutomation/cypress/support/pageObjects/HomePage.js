export class HomePage {
  static homePageUrl = "https://automationteststore.com/";

  static visitHomePage() {
    cy.visit(HomePage.homePageUrl);
  }
}
