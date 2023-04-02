export class ShoppingCartPage {
  static checkoutPath = "#cart_checkout1";
  static getCheckoutPath() {
    return cy.get(ShoppingCartPage.checkoutPath);
  }

  static clickCheckoutPath() {
    ShoppingCartPage.getCheckoutPath().click();
  }
}
