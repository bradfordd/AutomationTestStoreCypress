export class CheckoutConfirmation {
  static confirmOrderButtonPath = "#checkout_btn";
  static getConfirmOrderButton() {
    return cy.get(CheckoutConfirmation.confirmOrderButtonPath);
  }
  static clickConfirmOrderButton() {
    CheckoutConfirmation.getConfirmOrderButton().click();
  }
}
