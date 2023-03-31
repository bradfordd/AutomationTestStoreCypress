export class LoginOrRegisterButton {
  static loginOrRegisterPath = "#customernav a";

  static clickButton() {
    return cy.get(LoginOrRegisterButton.loginOrRegisterPath).click();
  }
}

//export default SearchBar;
