export class AccountDashboard {
  static alertPath = ".alert";

  static editAccountDetailsPath =
    '[data-original-title="Edit account details"]';
  static manageAddressBookPath =
    '.btn[data-original-title="Manage Address Book"]';
  static myWishlistPath = "[data-original-title='My wish list']";

  static getMyWishlist() {
    return cy.get(this.myWishlistPath);
  }
  static clickMyWishlist() {
    this.getMyWishlist().click();
  }

  static getManageAddressBookButton() {
    return cy.get(AccountDashboard.manageAddressBookPath);
  }
  static clickManageAddressBookButton() {
    AccountDashboard.getManageAddressBookButton().click();
  }
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
