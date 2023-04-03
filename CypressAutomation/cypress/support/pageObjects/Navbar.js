export class Navbar {
  static customerMenuPath = "#customer_menu_top";
  static getCustomerMenu() {
    return cy.get(Navbar.customerMenuPath);
  }
  static clickCustomerMenu() {
    Navbar.getCustomerMenu().click();
  }
}

export default Navbar;
