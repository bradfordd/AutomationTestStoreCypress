import { HomePage } from "../pageObjects/HomePage";
import { SearchBar } from "../pageObjects/SearchBar";
import { LoginOrRegisterButton } from "../pageObjects/LoginOrRegisterButton";
import { LoginPage } from "../pageObjects/LoginPage";
import { Navbar } from "../pageObjects/Navbar";
import { AccountDashboard } from "../pageObjects/AccountDashboard";
import { AddressBook } from "../pageObjects/AddressBook";

export class AddressCleanup {
  static cleanupAddresses() {
    cy.clearCookies();
    HomePage.visitHomePage();
    LoginOrRegisterButton.clickButton();
    cy.fixture("johndoe").then(function (data) {
      this.data = data;
      LoginPage.login(this.data.loginname, this.data.password);
    });
    Navbar.clickCustomerMenu();
    AccountDashboard.clickManageAddressBookButton();
    AddressBook.clickAllDeleteButtons();
  }
}
