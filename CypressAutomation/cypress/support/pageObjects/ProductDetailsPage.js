// support/pageObjects/ProductDetailsPage.js

export class ProductDetailsPage {
  // Selectors
  static productName = "span.bgnone";
  static productPrice = "div.productfilneprice";
  static productDescription = "#description p";
  static addToCartButton = ".productpagecart";
  static notInStockPath = ".nostock";
  static addToWishListPath = "a.wishlist_add";
  static removeFromWishListPath = "a.wishlist_remove";
  static productInfoPath = ".productinfo li";

  static getProductInfo() {
    return cy.get(this.productInfoPath);
  }

  static getModelNumber() {
    return this.getProductInfo().then(($list) => {
      let modelNumber;

      $list.each((index, el) => {
        // el is the current element
        // index is the index of the current element in the list
        const $el = Cypress.$(el);
        if ($el.text().includes("Model:")) {
          modelNumber = $el.text().split(":")[1].trim();
        }
      });

      return cy.wrap(modelNumber);
    });
  }

  static isAddToWishListButtonDisplayed() {
    return this.getAddToWishList()
      .invoke("attr", "style")
      .then((attributeValue) => {
        if (attributeValue === undefined) {
          return cy.wrap(true);
        }
        return cy.wrap(attributeValue === "display: inline-block;");
      });
  }

  static isRemoveFromWishListButtonDisplayed() {
    return this.getRemoveFromWishList()
      .invoke("attr", "style")
      .then((attributeValue) => {
        if (attributeValue === undefined) {
          return cy.wrap(true);
        }
        // Use the attribute value here
        return cy.wrap(attributeValue === "display: inline-block;");
      });
  }

  static getRemoveFromWishList() {
    return cy.get(this.removeFromWishListPath);
  }

  static itemIsOutOfStock() {
    return cy.document().then((doc) => {
      const outOfStockElements = doc.querySelectorAll(
        ProductDetailsPage.notInStockPath
      );
      return cy.wrap(outOfStockElements.length > 0);
    });
  }

  static getProductName() {
    return cy.get(ProductDetailsPage.productName);
  }

  static getAddToWishList() {
    return cy.get(ProductDetailsPage.addToWishListPath);
  }

  static clickAddToWishListButton() {
    this.isAddToWishListButtonDisplayed().then((isDisplayed) => {
      if (isDisplayed) {
        cy.get("a.wishlist_add").click();
      }
      // else {
      //   throw new Error("Add To Wish List button is not displayed");
      // }
    });
  }

  static clickRemoveFromWishListButton() {
    this.isRemoveFromWishListButtonDisplayed().then((isDisplayed) => {
      if (isDisplayed) {
        ProductDetailsPage.getRemoveFromWishList().click();
      } else {
        throw new Error("Add To Wish List button is not displayed");
      }
    });
  }

  static getProductName() {
    return cy.get(ProductDetailsPage.productName);
  }

  static getProductPrice() {
    return cy.get(ProductDetailsPage.productPrice);
  }

  static getAddToCartButton() {
    return cy.get(ProductDetailsPage.addToCartButton);
  }
  static clickAddToCartButton() {
    return cy.get(ProductDetailsPage.addToCartButton).click();
  }

  static getProductDescription() {
    return cy.get(ProductDetailsPage.productDescription);
  }
}
