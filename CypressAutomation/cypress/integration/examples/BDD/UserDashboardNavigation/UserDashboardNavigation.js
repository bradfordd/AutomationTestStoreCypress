import {
  Given,
  When,
  Then,
  After,
} from "@badeball/cypress-cucumber-preprocessor";
import { HomePage } from "../../../../support/pageObjects/HomePage";
import { SearchBar } from "../../../../support/pageObjects/SearchBar";
import { SearchResultsPage } from "../../../../support/pageObjects/SearchResultsPage";
import { ProductDetailsPage } from "../../../../support/pageObjects/ProductDetailsPage";
import { LoginOrRegisterButton } from "../../../../support/pageObjects/LoginOrRegisterButton";
import { LoginPage } from "../../../../support/pageObjects/LoginPage";
import { ProductSpecifications } from "../../../../support/pageObjects/ProductSpecifications";
import { ShoppingCartPage } from "../../../../support/pageObjects/shoppingCartPage";
import { CheckoutConfirmation } from "../../../../support/pageObjects/CheckoutConfirmation";
import { OrderProcessConfirmationPage } from "../../../../support/pageObjects/OrderProcessConfirmationPage";
import { Navbar } from "../../../../support/pageObjects/Navbar";
import { AccountDashboard } from "../../../../support/pageObjects/AccountDashboard";
import { EditAccountDetailsPage } from "../../../../support/pageObjects/EditAccountDetailsPage";
import { AddressBook } from "../../../../support/pageObjects/AddressBook";
import { AddressCleanup } from "../../../../support/cleanup/addressCleanup";

var newFirstName;
var newLastName;
var newEmail;
var newPhoneNumber;
var newFaxNumber;
var newCompanyName;
var newAddressLine;
var newCity;
var newZip;
var newState;

Given("User Selects Edit Address Book", function () {
  AccountDashboard.clickManageAddressBookButton();
});

Given("Enters in the new Address information and clicks continue", function () {
  AddressBook.clickNewAddressButton();
  cy.fixture("randomnames").then(function (data) {
    const firstNameIndex = Math.floor(Math.random() * 50);
    const lastNameIndex = Math.floor(Math.random() * 50);
    this.data = data;
    newFirstName = this.data.firstNames[firstNameIndex];
    newLastName = this.data.lastNames[lastNameIndex];
    AddressBook.enterNewFirstName(newFirstName);
    AddressBook.enterNewLastName(newLastName);
  });
  cy.fixture("randomcompanies").then(function (data) {
    const companyIndex = Math.floor(Math.random() * 50);
    this.data = data;
    newCompanyName = this.data.companyNames[companyIndex];
    AddressBook.enterNewCompany(newCompanyName);
  });
  cy.fixture("randomaddresses").then(function (data) {
    const addressIndex = Math.floor(Math.random() * 50);
    this.data = data;
    data = JSON.parse(data);
    newAddressLine = data.addresses[addressIndex].street;
    AddressBook.enterNewAddress(newAddressLine);
    newCity = data.addresses[addressIndex].city;
    AddressBook.enterNewCity(newCity);
    AddressBook.selectCountry("United States");
    newZip = data.addresses[addressIndex].zip;
    AddressBook.enterNewZip(newZip);
    let stateAbbreviation = data.addresses[addressIndex].state;
    cy.fixture("stateabbreviations").then(function (data) {
      this.data = data;
      console.log(this.data[stateAbbreviation]);
      newState = this.data[stateAbbreviation];
      AddressBook.selectZone(newState);
    });
    AddressBook.clickContinueButton();
  });
});

Then(
  "Address book reflects added address, user then deletes said address",
  function () {
    AddressBook.getAllAddressBoxesText().then((array) => {
      const expectedText =
        newFirstName +
        " " +
        newLastName +
        newCompanyName +
        newAddressLine +
        newCity +
        ", " +
        newState +
        " " +
        newZip +
        "United States";
      expect(array.includes(expectedText)).to.be.true;
    });
  }
);

Given(
  "User Navigates to ATS HomePage, logs in, and then navigates to user dashboard",
  () => {
    cy.clearCookies();
    HomePage.visitHomePage();
    LoginOrRegisterButton.clickButton();
    cy.fixture("johndoe").then(function (data) {
      this.data = data;
      LoginPage.login(this.data.loginname, this.data.password);
    });
    Navbar.clickCustomerMenu();
  }
);

Given("User Selects Edit Account Details", () => {
  AccountDashboard.clickEditAccountDetailsButton();
});

Given("User Edits Account Details and clicks continue", function () {
  cy.fixture("randomnames").then(function (data) {
    const firstNameIndex = Math.floor(Math.random() * 50);
    const lastNameIndex = Math.floor(Math.random() * 50);
    this.data = data;
    newFirstName = this.data.firstNames[firstNameIndex];
    newLastName = this.data.lastNames[lastNameIndex];
    newEmail = newFirstName + "." + newLastName + "@example.com";
    let areaCode = Math.floor(Math.random() * 900) + 100;
    let prefix = Math.floor(Math.random() * 900) + 100;
    let lineNumber = Math.floor(Math.random() * 9000) + 1000;
    newPhoneNumber = `${areaCode}${prefix}${lineNumber}`;
    areaCode = Math.floor(Math.random() * 900) + 100;
    prefix = Math.floor(Math.random() * 900) + 100;
    lineNumber = Math.floor(Math.random() * 9000) + 1000;
    newFaxNumber = `${areaCode}${prefix}${lineNumber}`;
    EditAccountDetailsPage.replaceFirstName(newFirstName);
    EditAccountDetailsPage.replaceLastName(newLastName);
    EditAccountDetailsPage.replaceEmail(newEmail);
    EditAccountDetailsPage.replaceTelephone(newPhoneNumber);
    EditAccountDetailsPage.replaceFax(newFaxNumber);
    EditAccountDetailsPage.clickContinueButton();
  });
});

Then(
  "User Selects Edit Account Details and Account Details reflect changes",
  function () {
    AccountDashboard.getAlertText().then((text) => {
      const expectedAlertText =
        AccountDashboard.getExpectedAccountUpdateSuccessAlertText();
      expect(text).to.equal(expectedAlertText);
    });
    AccountDashboard.clickEditAccountDetailsButton();
    EditAccountDetailsPage.getFirstNameInputValue().then((value) => {
      expect(value).to.equal(newFirstName);
    });
    EditAccountDetailsPage.getLastNameInputValue().then((value) => {
      expect(value).to.equal(newLastName);
    });
    EditAccountDetailsPage.getEmailInputValue().then((value) => {
      expect(value).to.equal(newEmail);
    });
    EditAccountDetailsPage.getTelephoneInputValue().then((value) => {
      expect(value).to.equal(newPhoneNumber);
    });
    EditAccountDetailsPage.getFaxInputValue().then((value) => {
      expect(value).to.equal(newFaxNumber);
    });
  }
);
After({ tags: "@AddressTest" }, function () {
  AddressCleanup.cleanupAddresses();
});
