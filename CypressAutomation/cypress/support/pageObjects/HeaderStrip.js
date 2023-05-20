export class HeaderStrip {
  static headerStripSelector = ".headerstrip";
  static accountMenuSelector = "#customernav";
  static dropdownOptionPathOpening =
    ".headerstrip #customernav .dropdown-menu > :nth-child(";
  static cartButtonSelector = "[data-id='menu_cart'] > a";
  static AccountDashboardIndex = 1;
  static MyWishlistIndex = 2;
  static editAccountDetailsIndex = 3;
  static changePasswordIndex = 4;
  static manageAddressBookIndex = 5;
  static orderHistoryIndex = 6;
  static transactionHistoryIndex = 7;
  static downloadsIndex = 8;
  static notificationsIndex = 9;
  static logoffIndex = 10;

  static generateAccountMenuCSSSelector(category) {
    category = category.toLowerCase();
    let generatedcssSelector = "";
    generatedcssSelector += this.dropdownOptionPathOpening;
    switch (category) {
      case "dashboard":
        generatedcssSelector += this.AccountDashboardIndex;
        break;
      case "wishlist":
        generatedcssSelector += this.MyWishlistIndex;
        break;
      case "account details":
        generatedcssSelector += this.editAccountDetailsIndex;
        break;
      case "change password":
        generatedcssSelector += this.changePasswordIndex;
        break;
      case "manage address":
        generatedcssSelector += this.manageAddressBookIndex;
        break;
      case "order history":
        generatedcssSelector += this.orderHistoryIndex;
        break;
      case "transaction history":
        generatedcssSelector += this.transactionHistoryIndex;
        break;
      case "downloads":
        generatedcssSelector += this.downloadsIndex;
        break;
      case "notifications":
        generatedcssSelector += this.notificationsIndex;
        break;
      case "logoff":
        generatedcssSelector += this.logoffIndex;
        break;
      default:
        throw new Error(
          `Incorrect subcategory specified for account dropdown selection`
        );
    }
    generatedcssSelector += ") > a";
    return generatedcssSelector;
  }
  static selectMyWishlist() {
    let menuSelector = this.generateAccountMenuCSSSelector("wishlist");
    cy.get(this.headerStripSelector)
      .find(this.accountMenuSelector)
      .trigger("mouseover");
    cy.get(menuSelector).click({ force: true });
  }

  static getCartElement() {
    return cy.get(this.headerStripSelector).find(this.cartButtonSelector);
  }

  static clickCartButton() {
    return this.getCartElement().click();
  }
}
