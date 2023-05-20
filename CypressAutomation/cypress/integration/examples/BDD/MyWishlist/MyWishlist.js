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
import { MyWishList } from "../../../../support/pageObjects/MyWishListPOM";
import { WishlistCleanup } from "../../../../support/cleanup/WishlistCleanup";
import { HeaderStrip } from "../../../../support/pageObjects/HeaderStrip";

let modelNumber = "";
let productName = "";

Given("User Navigates to ATS HomePage and is logged in", function () {
  cy.clearCookies();
  HomePage.visitHomePage();
  LoginOrRegisterButton.clickButton();
  cy.fixture("johndoe").then(function (data) {
    this.data = data;
    LoginPage.login(this.data.loginname, this.data.password);
  });
  LoginOrRegisterButton.doesBrowserHaveLoggedInCookie().then((result) => {
    cy.log("After Login: " + result);
  });
});

When("User Selects an item and adds item to their wishlist", function () {
  SearchBar.searchForItem("ck one");
  SearchResultsPage.getNumberOfProductsOnPage().then((numberOfProducts) => {
    expect(numberOfProducts).to.be.greaterThan(0);
  });
  SearchResultsPage.clickOnNthProduct(0);
  if (ProductDetailsPage.isAddToWishListButtonDisplayed()) {
    ProductDetailsPage.clickAddToWishListButton();
  }
  ProductDetailsPage.getModelNumber().then((val) => {
    modelNumber = val;
  });
  ProductDetailsPage.getProductName()
    .invoke("text")
    .then((val) => {
      productName = val;
    });
});

When(
  "User Navigates back to their user dashboard and views their wishlist items",
  function () {
    Navbar.clickCustomerMenu();
    AccountDashboard.clickMyWishlist();
  }
);

Then(
  "User is shown their wishlist with the item they added being present",
  function () {
    const promises = [
      MyWishList.wishlistContainsGivenProductModel(modelNumber).then((val) => {
        expect(val).to.be.true;
      }),
      MyWishList.wishlistContainsGivenProductName(name).then((index) => {
        expect(index).to.be.true;
      }),
    ];
    return Promise.all(promises);
  }
);

After({ tags: "@Wishlist" }, () => {
  return WishlistCleanup.cleanupWishlist();
});
