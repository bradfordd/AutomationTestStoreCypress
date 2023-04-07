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
import { Navbar } from "../../../../support/pageObjects/Navbar";
import { AccountDashboard } from "../../../../support/pageObjects/AccountDashboard";
import { MyWishList } from "../../../../support/pageObjects/MyWishList";

var modelNumber = "";

Given("User Navigates to ATS HomePage and is logged in", function () {
  cy.clearCookies();
  HomePage.visitHomePage();
  LoginOrRegisterButton.clickButton();
  cy.fixture("johndoe").then(function (data) {
    this.data = data;
    LoginPage.login(this.data.loginname, this.data.password);
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
});

When(
  "User Navigates back to their user dashboard and views their wishlist items",
  function () {
    Navbar.clickCustomerMenu();
    AccountDashboard.clickMyWishlist();
    MyWishList.getNthTableModelCell(4)
      .invoke("text")
      .then((cell) => {
        expect(cell).to.equal(modelNumber);
      });
    MyWishList.findGivenModelTableRow(modelNumber).then((n) => {
      console.log(n);
    });
  }
);

Then(
  "User is shown their wishlist with the item they added being present",
  function () {
    //     Your code to assert that the added item is present in the wishlist
    //     Wishlist.verifyItemInWishlist(); // You may need to pass the item details as an argument
  }
);
