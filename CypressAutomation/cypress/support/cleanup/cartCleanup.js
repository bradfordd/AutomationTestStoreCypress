import { HomePage } from "../pageObjects/HomePage";
import Navbar from "../pageObjects/Navbar";
import { ShoppingCartPage } from "../pageObjects/ShoppingCartPage";

// myModule.js
export function cartCleanup() {
  //Deletes all items in currently logged in user's cart
  HomePage.visitHomePage();
  cy.getCookie("customer").should("exist");
  Navbar.clickCartButton();
  ShoppingCartPage.getNumberOfProductsInCart().then((numOfProducts) => {
    cy.log("Number of Elements: " + numOfProducts);
    ShoppingCartPage.removeAllItemsFromCart();
  });
}
