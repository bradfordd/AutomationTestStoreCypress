export class LoginPage {
  static loginNamePath = "#loginFrm_loginname";
  static loginPasswordPath = "#loginFrm_password";
  static loginButtonPath = 'button[title="Login"]';
  static forgotPasswordPromptPath = 'a[href*="forgotten/password"]';
  static forgotLoginPromptPath = 'a[href*="forgotten/loginname"]';

  static getLoginInput() {
    return cy.get(LoginPage.loginNamePath);
  }

  static getPasswordInput() {
    return cy.get(LoginPage.loginPasswordPath);
  }

  static getLoginButton() {
    return cy.get(LoginPage.loginButtonPath);
  }

  static getForgottenPasswordLink() {
    return cy.get(LoginPage.forgotPasswordPromptPath);
  }

  static getForgottenLoginLink() {
    return cy.get(LoginPage.getForgottenLoginPromptPath);
  }

  static login(username, password) {
    LoginPage.getLoginInput().type(username);
    LoginPage.getPasswordInput().type(password);
    LoginPage.getLoginButton().click();
  }
}

export default LoginPage;
