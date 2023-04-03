export class AccountDashboard {
  static alertPath = ".alert";
  static editAccountDetailsPath =
    '[data-original-title="Edit account details"]';

  static getAlert() {
    return cy.get(AccountDashboard.alertPath);
  }

  static getAlertText() {
    return AccountDashboard.getAlert()
      .invoke("text")
      .then((text) => {
        return text;
      });
  }

  static getExpectedAccountUpdateSuccessAlertText() {
    return "\n×\nSuccess: Your account has been successfully updated.";
  }

  static getEditAccountDetailsButton() {
    return cy.get(AccountDashboard.editAccountDetailsPath);
  }
  static clickEditAccountDetailsButton() {
    AccountDashboard.getEditAccountDetailsButton().click();
  }
}
