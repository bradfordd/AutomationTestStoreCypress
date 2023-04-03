import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
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

var currProductTitle = "";
Given("User Searches For {string}", function (item) {
  SearchBar.searchForItem(item);
});

Given("User Navigates to ATS HomePage and is logged in", function () {
  cy.clearCookies();
  HomePage.visitHomePage();
  LoginOrRegisterButton.clickButton();
  cy.fixture("johndoe").then(function (data) {
    this.data = data;
    LoginPage.login(this.data.loginname, this.data.password);
  });
});

Given(
  "User Searches For {string}, then selects first item on search results page",
  function (item) {
    SearchBar.searchForItem(item);
    SearchResultsPage.getNumberOfProductsOnPage().then((numberOfProducts) => {
      expect(numberOfProducts).to.be.greaterThan(0);
    });
    SearchResultsPage.getNthProductTitle(0).then((productTitle) => {
      currProductTitle = productTitle;
    });
    SearchResultsPage.clickOnNthProduct(0);
  }
);

Given(
  "User makes purchase specifications if necessary, adds item to cart and proceeds to checkout",
  function (item) {
    let hasSelection = false;
    ProductSpecifications.hasSelections().then((hasSelection) => {
      if (hasSelection) {
        ProductSpecifications.hasRadioButtons().then((hasRadioButtons) => {
          if (hasRadioButtons) {
            ProductSpecifications.getNthRadioButton(1).click();
          }
        });
        ProductSpecifications.hasDropdownMenu().then((hasDropdownMenu) => {
          if (hasDropdownMenu) {
            ProductSpecifications.selectFirstAvailableDropdownOption();
          }
        });
      }
    });
    ProductDetailsPage.clickAddToCartButton();
    ShoppingCartPage.clickCheckoutPath();
  }
);

Given("User selects first product on Search Results Page", () => {
  SearchResultsPage.getNumberOfProductsOnPage().then((numberOfProducts) => {
    expect(numberOfProducts).to.be.greaterThan(0);
  });
  SearchResultsPage.getNthProductTitle(0).then((productTitle) => {
    currProductTitle = productTitle;
  });
  SearchResultsPage.getNthProductLink(0).click();
});

Then(
  "Product details Page Corresponding with selected entry is displayed",
  () => {
    ProductDetailsPage.getProductName()
      .invoke("text")
      .then((productName) => {
        expect(productName).to.equal(currProductTitle);
      });
  }
);

Then("Checkout confirmation page displays", () => {
  CheckoutConfirmation.clickConfirmOrderButton();
  OrderProcessConfirmationPage.clickContinueButton();
});
