// support/pageObjects/ProductDetailsPage.js

export class ProductDetailsPage {
  // Selectors
  static productName = "span.bgnone";
  static productPrice = "div.productfilneprice";
  static productDescription = "#description p";
  static addToCartButton = ".productpagecart";
  static notInStockPath = ".nostock";

  // Methods
  static visitProductDetailsPage(product_id = 89) {
    cy.visit(
      `/index.php?rt=product/product&keyword=perfume&category_id=0&product_id=${product_id}`
    );
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

  static getProductNameText() {
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
