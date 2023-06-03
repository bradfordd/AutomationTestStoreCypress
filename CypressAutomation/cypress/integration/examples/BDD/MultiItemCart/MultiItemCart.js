import {
  Given,
  When,
  Then,
  After,
  Before,
  AfterEach,
  BeforeEach,
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
import { Navbar } from "../../../../support/pageObjects/Navbar";
import { CartProduct } from "../../../../support/models/CartProduct";

let cartObjects = [];
Given("User Navigates to ATS HomePage and is logged in", function () {
  HomePage.visitHomePage();
  cy.getCookie("customer").should("exist");
});

Given(
  "User Adds multiple items to their cart after searching for {string}",
  function (string) {
    SubNav.selectSubNavCategory("Apparel & accessories");
    SearchResultsPage.clickOnNthProduct(0);
    ProductDetailsPage.hasSpecifications().then((hasSpecs) => {
      if (hasSpecs) {
        ProductDetailsPage.makeDefaultSpecifications().then(() => {
          ProductDetailsPage.getCartProductObjectFromProductDetails().then(
            (cartObject) => {
              const c = cartObject;
              cartObjects.push(c);
              ProductDetailsPage.clickAddToCartButton();
            }
          );
        });
      } else {
        ProductDetailsPage.getCartProductObjectFromProductDetails().then(
          (cartObject) => {
            const c = cartObject;
            cartObjects.push(c);
            ProductDetailsPage.clickAddToCartButton();
          }
        );
      }
    });
    SubNav.selectSubNavCategory("Makeup");
    SearchResultsPage.clickOnNthProduct(1);
    ProductDetailsPage.hasSpecifications().then((hasSpecs) => {
      if (hasSpecs) {
        ProductDetailsPage.makeDefaultSpecifications().then(() => {
          ProductDetailsPage.getCartProductObjectFromProductDetails().then(
            (cartObject) => {
              const c = cartObject;
              cartObjects.push(c);
              ProductDetailsPage.clickAddToCartButton();
            }
          );
        });
      } else {
        ProductDetailsPage.getCartProductObjectFromProductDetails().then(
          (cartObject) => {
            const c = cartObject;
            cartObjects.push(c);
            ProductDetailsPage.clickAddToCartButton();
          }
        );
      }
    });
    SubNav.selectSubNavCategory("Skincare");
    SearchResultsPage.clickOnNthProduct(1);
    ProductDetailsPage.hasSpecifications().then((hasSpecs) => {
      if (hasSpecs) {
        ProductDetailsPage.makeDefaultSpecifications().then(() => {
          ProductDetailsPage.getCartProductObjectFromProductDetails().then(
            (cartObject) => {
              const c = cartObject;
              cartObjects.push(c);
              ProductDetailsPage.clickAddToCartButton();
            }
          );
        });
      } else {
        ProductDetailsPage.getCartProductObjectFromProductDetails().then(
          (cartObject) => {
            const c = cartObject;
            cartObjects.push(c);
            ProductDetailsPage.clickAddToCartButton();
          }
        );
      }
    });
    SubNav.selectSubNavCategory("Fragrance");
    SearchResultsPage.clickOnNthProduct(0);
    ProductDetailsPage.hasSpecifications().then((hasSpecs) => {
      if (hasSpecs) {
        ProductDetailsPage.makeDefaultSpecifications().then(() => {
          ProductDetailsPage.getCartProductObjectFromProductDetails().then(
            (cartObject) => {
              const c = cartObject;
              cartObjects.push(c);
              ProductDetailsPage.clickAddToCartButton();
            }
          );
        });
      } else {
        ProductDetailsPage.getCartProductObjectFromProductDetails().then(
          (cartObject) => {
            const c = cartObject;
            cartObjects.push(c);
            ProductDetailsPage.clickAddToCartButton();
          }
        );
      }
    });
    SubNav.selectSubNavCategory("Men");
    SearchResultsPage.clickOnNthProduct(0);
    ProductDetailsPage.hasSpecifications().then((hasSpecs) => {
      if (hasSpecs) {
        ProductDetailsPage.makeDefaultSpecifications().then(() => {
          ProductDetailsPage.getCartProductObjectFromProductDetails().then(
            (cartObject) => {
              const c = cartObject;
              cartObjects.push(c);
              ProductDetailsPage.clickAddToCartButton();
            }
          );
        });
      } else {
        ProductDetailsPage.getCartProductObjectFromProductDetails().then(
          (cartObject) => {
            const c = cartObject;
            cartObjects.push(c);
            ProductDetailsPage.clickAddToCartButton();
          }
        );
      }
    });
    SubNav.selectSubNavCategory("Hair Care");
    SearchResultsPage.clickOnNthProduct(0);
    ProductDetailsPage.hasSpecifications().then((hasSpecs) => {
      if (hasSpecs) {
        ProductDetailsPage.makeDefaultSpecifications().then(() => {
          ProductDetailsPage.getCartProductObjectFromProductDetails().then(
            (cartObject) => {
              const c = cartObject;
              cartObjects.push(c);
              ProductDetailsPage.clickAddToCartButton();
            }
          );
        });
      } else {
        ProductDetailsPage.getCartProductObjectFromProductDetails().then(
          (cartObject) => {
            const c = cartObject;
            cartObjects.push(c);
            ProductDetailsPage.clickAddToCartButton();
          }
        );
      }
    });
    SubNav.selectSubNavCategory("Books");
    SearchResultsPage.clickOnNthProduct(0);
    ProductDetailsPage.hasSpecifications().then((hasSpecs) => {
      if (hasSpecs) {
        ProductDetailsPage.makeDefaultSpecifications().then(() => {
          ProductDetailsPage.getCartProductObjectFromProductDetails().then(
            (cartObject) => {
              const c = cartObject;
              cartObjects.push(c);
              ProductDetailsPage.clickAddToCartButton();
            }
          );
        });
      } else {
        ProductDetailsPage.getCartProductObjectFromProductDetails().then(
          (cartObject) => {
            const c = cartObject;
            cartObjects.push(c);
            ProductDetailsPage.clickAddToCartButton();
          }
        );
      }
    });
  }
);

Given("User Navigates to their cart", function () {
  Navbar.clickCartButton();
});

Then("Cart reflecting items added to cart is shown", function () {
  cy.wrap(cartObjects).then((cartObjects) => {
    for (let i = 0; i < cartObjects.length; i++) {
      const productName = cartObjects[i].productName;
      const productSpecs = cartObjects[i].specifications;
      if (productSpecs[0] == "No Specifications Available for this Product") {
        ShoppingCartPage.getCartProductObjectByProductName(productName).then(
          (cartEntry) => {
            //NAME ASSERTION
            cy.wrap(cartEntry.productName).should(
              "include",
              cartObjects[i].productName
            );
            cy.wrap(cartEntry.model).should("include", cartObjects[i].model);
            debugger;
            cy.wrap(cartEntry.unitPrice).should(
              "include",
              cartObjects[i].unitPrice
            );
            cy.wrap(cartEntry.quantity).should(
              "include",
              cartObjects[i].quantity
            );
            cy.wrap(cartEntry.total).should("include", cartObjects[i].total);
            cy.wrap(cartEntry.specifications).should(
              "have.members",
              cartObjects[i].specifications
            );
          }
        );
      } else {
        ShoppingCartPage.getCartProductObjectByProductName(productName).then(
          (cartEntry) => {
            //NAME ASSERTION
            cy.wrap(cartEntry.productName).should(
              "include",
              cartObjects[i].productName
            );
            cy.wrap(cartEntry.model).should("include", cartObjects[i].model);
            cy.wrap(cartEntry.unitPrice).should(
              "include",
              cartObjects[i].unitPrice
            );
            cy.wrap(cartEntry.quantity).should(
              "include",
              cartObjects[i].quantity
            );
            cy.wrap(cartEntry.total).should("include", cartObjects[i].total);
            cy.wrap(cartObjects[i].specifications).each((spec, index) => {
              //const element2 = array2[index];
              cy.wrap(cartEntry.specifications[index]).should((str) => {
                expect(str.includes(spec) || spec.includes(str));
              });
            });
          }
        );
        // ShoppingCartPage.getCartProductObjectByProductName(productName).then(
        //   (cartEntry) => {
        //     cy.log(
        //       "VERY VERY EXTREMELY REMARKABLY IMPORTANT CART ENTRY: " +
        //         cartEntry.toString()
        //     );
        //   }
        // );
      }
    }
  });
});

Before({ tags: "@CartTest" }, () => {
  cartObjects = [];
  cy.clearCookies();
  HomePage.visitHomePage();
  LoginOrRegisterButton.clickButton();
  cy.fixture("johndoe").then(function (data) {
    this.data = data;
    LoginPage.login(this.data.loginname, this.data.password);
  });
  cartCleanup();
});
