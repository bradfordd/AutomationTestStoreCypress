export class OrderProcessConfirmationPage {
  static continueButtonPath = ".mr10";
  static getContinueButton() {
    return cy.get(OrderProcessConfirmationPage.continueButtonPath);
  }
  static clickContinueButton() {
    OrderProcessConfirmationPage.getContinueButton().click();
  }
}
