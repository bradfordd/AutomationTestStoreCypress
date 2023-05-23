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
import { ShoppingCartPage } from "../../../../support/pageObjects/ShoppingCartPage";
import { CheckoutConfirmation } from "../../../../support/pageObjects/CheckoutConfirmation";
import { OrderProcessConfirmationPage } from "../../../../support/pageObjects/OrderProcessConfirmationPage";
import { cartCleanup } from "../../../../support/cleanup/cartCleanup";
import { HeaderStrip } from "../../../../support/pageObjects/HeaderStrip";
import { SubNav } from "../../../../support/pageObjects/SubNav";

Given("User Navigates to ATS HomePage and is logged in", function () {
  cy.clearCookies();
  HomePage.visitHomePage();
  LoginOrRegisterButton.clickButton();
  cy.fixture("johndoe").then(function (data) {
    this.data = data;
    LoginPage.login(this.data.loginname, this.data.password);
  });

  SubNav.selectSubNavCategory("Apparel & accessories");
  SearchResultsPage.clickOnNthProduct(0);
  ProductDetailsPage.hasSpecifications().then((hasSpecs) => {
    if (hasSpecs) {
      ProductDetailsPage.makeDefaultSpecifications();
    }
  });
  ProductDetailsPage.clickAddToCartButton();
  SubNav.selectSubNavCategory("Makeup");
  SearchResultsPage.clickOnNthProduct(0);
  ProductDetailsPage.hasSpecifications().then((hasSpecs) => {
    if (hasSpecs) {
      ProductDetailsPage.makeDefaultSpecifications();
    }
  });
  ProductDetailsPage.clickAddToCartButton();
  SubNav.selectSubNavCategory("Skincare");
  SearchResultsPage.clickOnNthProduct(0);
  ProductDetailsPage.hasSpecifications().then((hasSpecs) => {
    if (hasSpecs) {
      ProductDetailsPage.makeDefaultSpecifications();
    }
  });
  SubNav.selectSubNavCategory("Fragrance");
  SearchResultsPage.clickOnNthProduct(0);
  ProductDetailsPage.hasSpecifications().then((hasSpecs) => {
    if (hasSpecs) {
      ProductDetailsPage.makeDefaultSpecifications();
    }
  });
  SubNav.selectSubNavCategory("Men");
  SearchResultsPage.clickOnNthProduct(0);
  ProductDetailsPage.hasSpecifications().then((hasSpecs) => {
    if (hasSpecs) {
      ProductDetailsPage.makeDefaultSpecifications();
    }
  });
  SubNav.selectSubNavCategory("Hair Care");
  SearchResultsPage.clickOnNthProduct(0);
  ProductDetailsPage.hasSpecifications().then((hasSpecs) => {
    if (hasSpecs) {
      ProductDetailsPage.makeDefaultSpecifications();
    }
  });
  SubNav.selectSubNavCategory("Books");
  SearchResultsPage.clickOnNthProduct(0);
  ProductDetailsPage.hasSpecifications().then((hasSpecs) => {
    if (hasSpecs) {
      ProductDetailsPage.makeDefaultSpecifications();
    }
  });
});

Given(
  "User Adds multiple items to their cart after searching for {string}",
  function (string) {
    // SearchBar.searchForItem(
    //   "New Ladies High Wedge Heel Toe Thong Diamante Flip Flop Sandals"
    // );
    // let itemSpecs = ["White", "Medium"];
    // return ProductDetailsPage.makeDefaultSpecifications().then(() => {
    //   ProductDetailsPage.getSelectedSpecifications().then((selectionsMade) => {
    //     cy.log("SELECTIONS MADE: ");
    //     for (let i = 0; i < selectionsMade.length; i++) {
    //       cy.log("Index " + i + ": " + selectionsMade[i]);
    //     }
    //     ProductDetailsPage.doCurrentSpecsMatchDesiredSpecs(itemSpecs).then(
    //       (result) => {
    //         cy.log("Result: " + result);
    //       }
    //     );
    //   });
    // });
  }
);

Given("User Navigates to their cart", function () {
  //return "pending";
});

Then("Cart reflecting items added to cart is shown", function () {
  //return "pending";
});

After({ tags: "@CartTest" }, () => {
  cartCleanup();
});
