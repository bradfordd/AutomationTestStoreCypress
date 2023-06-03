export class Navbar {
  static customerMenuPath = "#customer_menu_top";
  static cartButtonPath =
    "ul#main_menu_top > [data-id='menu_cart'] > a.nobackground";
  static getCustomerMenu() {
    return cy.get(Navbar.customerMenuPath);
  }
  static clickCustomerMenu() {
    Navbar.getCustomerMenu().click();
  }
  static clickCartButton() {
    cy.get(this.cartButtonPath).click();
  }
}

export default Navbar;
