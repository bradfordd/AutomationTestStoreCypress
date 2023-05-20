import { HomePage } from "./HomePage";

export class LoginOrRegisterButton {
  static loginOrRegisterPath =
    "*#customernav  a[href='https://automationteststore.com/index.php?rt=account/login'], *#customernav  a[href='https://automationteststore.com/index.php?rt=account/account']";

  static clickButton() {
    return cy.get(this.loginOrRegisterPath).click();
  }

  static currentPageContainsLoginOrRegister() {
    const loginButton = Cypress.$(this.loginOrRegisterPath);
    if (loginButton.length) {
      return true;
    } else {
      return false;
    }
  }
  static isUserLoggedIn() {
    if (!this.currentPageContainsLoginOrRegister()) {
      HomePage.visitHomePage();
    }
    return cy.get(this.loginOrRegisterPath).then(($parent) => {
      const $child = $parent.find("div");
      let isLoggedIn = false;

      // Check if the child element exists
      if ($child.length > 0) {
        const childText = $child.text();
        if (childText.includes("Welcome")) {
          isLoggedIn = true;
        }
      } else {
        // Return parent text
        const parentText = $parent.text();
        if (parentText.includes("Welcome")) {
          isLoggedIn = true;
        }
      }
      return cy.wrap(isLoggedIn);
    });
  }

  static doesBrowserHaveLoggedInCookie() {
    return cy.getCookie("customer").then((cookie) => {
      if (cookie) {
        return cy.wrap(true);
      } else {
        return cy.wrap(false);
      }
    });
  }
}

//export default SearchBar;
