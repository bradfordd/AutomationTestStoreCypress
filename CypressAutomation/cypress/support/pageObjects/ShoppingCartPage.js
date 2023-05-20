export class ShoppingCartPage {
  static checkoutPath = "#cart_checkout1";
  static shoppingCartTablePath = ".product-list";
  static shoppingCartTableRowsPath = ".product-list tr";
  static tableDataNthChildPath = " td:nth-child(";
  static imageIndex = 1;
  static nameIndex = 2;
  static modelIndex = 3;
  static unitPriceIndex = 4;
  static quantityIndex = 5;
  static totalIndex = 6;
  static removeIndex = 7;
  static nameBoxesBaseSelector =
    this.shoppingCartTableRowsPath +
    this.tableDataNthChildPath +
    this.nameIndex;
  static getCheckoutPath() {
    return cy.get(ShoppingCartPage.checkoutPath);
  }

  static clickCheckoutPath() {
    ShoppingCartPage.getCheckoutPath().click();
  }

  static getProductIndexByNameAndSpecs(name, specs) {
    let productNameLinkSelector = this.nameBoxesBaseSelector + ") > a";

    return new Cypress.Promise((resolve, reject) => {
      cy.get(productNameLinkSelector)
        .each(($el, index, $list) => {
          const text = $el.text();
          if (text.includes(name)) {
            cy.get(this.nameBoxesBaseSelector)
              .eq(index)
              .find("small")
              .then(($smallEls) => {
                let specsMatch = $smallEls.toArray().every((smallEl, i) => {
                  return smallEl.textContent.includes(specs[i]);
                });
                if (specsMatch) {
                  resolve(index);
                }
              });
          }
        })
        .then(() => {
          // None of the elements matched
          resolve(-1);
        });
    });
  }

  static isProductInCart(name) {
    //return cy.wrap(this.getProductIndexByName(name) !== -1);
    return this.getProductIndexByName(name).then((result) => {
      return result !== -1;
    });
  }
  static getProductIndexByName(name) {
    let localSelector =
      this.shoppingCartTableRowsPath +
      this.tableDataNthChildPath +
      this.nameIndex +
      ") > a";

    // Initialize a flag for product index
    cy.wrap(-1).as("productIndex");

    cy.get(localSelector).each((element, index) => {
      cy.wrap(element)
        .invoke("text")
        .then((text) => {
          if (text.includes(name)) {
            // Set the flag to current index if product is found
            cy.wrap(index).as("productIndex");
          }
        });
    });

    // Return the product index
    return cy.get("@productIndex");
  }

  static getTotalByItemIndex(i) {
    let localSelector =
      this.shoppingCartTableRowsPath +
      this.tableDataNthChildPath +
      this.totalIndex +
      ")";
    return cy.get(localSelector).eq(i).invoke("text");
  }

  static getQuantityByItemIndex(i) {
    let localSelector =
      this.shoppingCartTableRowsPath +
      this.tableDataNthChildPath +
      this.quantityIndex +
      ") input";
    return cy.get(localSelector).invoke("attr", "value");
  }
  static getUnitPriceByItemIndex(i) {
    let localSelector =
      this.shoppingCartTableRowsPath +
      this.tableDataNthChildPath +
      this.unitPriceIndex +
      ")";
    return cy.get(localSelector).eq(i).invoke("text");
  }
}
