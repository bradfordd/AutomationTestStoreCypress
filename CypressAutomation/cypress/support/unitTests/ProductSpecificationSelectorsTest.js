/// <reference types="Cypress" />
import ProductPage from "../pageObjects/ProductSpecificationSelectors";

describe("ProductSpecificationSelectors", () => {
  beforeEach(() => {
    cy.visit(
      "https://automationteststore.com/index.php?rt=product/product&path=68_69&product_id=116#review"
    );
  });

  it("checks if specifications are present", () => {
    ProductSpecificationSelectors.hasSelections().should("be.true");
  });
});
