import { CartProduct } from "../models/CartProduct";

export class ShoppingCartPage {
  static checkoutPath = "#cart_checkout1";
  static shoppingCartTablePath = ".product-list";
  static shoppingCartTableRowsPath = ".product-list tr";
  static shoppingCartTableIndexedRowBasePath = ".product-list tr:nth-child(";
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
  static removeFromCartButtonSelector = "i.fa-trash-o";
  static doesNthTableRowHaveSpecs(i) {
    i = i + 2;
    let localSelector =
      this.shoppingCartTableIndexedRowBasePath +
      i +
      ") " +
      this.tableDataNthChildPath +
      this.nameIndex +
      ") div small";
    const elementExists = Cypress.$(localSelector).length > 0;
    return cy.wrap(elementExists);
  }
  static removeAllItemsFromCart() {
    this.getNumberOfProductsInCart().then((numOfProducts) => {
      let i = 0;
      for (let i = 0; i < numOfProducts; i++) {
        cy.get(this.removeFromCartButtonSelector).eq(0).click();
      }
    });
  }
  static getProductSpecsByItemIndex(i) {
    let localSelector =
      this.shoppingCartTableRowsPath +
      this.tableDataNthChildPath +
      this.nameIndex +
      ") div";

    return this.doesNthTableRowHaveSpecs(i).then((hasSpecs) => {
      if (!hasSpecs) {
        return ["No Specifications Available for this Product"]; // Return an empty array if no specs are found
      }

      return cy
        .get(localSelector)
        .eq(i)
        .find("small")
        .then(($elements) => {
          const specsArray = [];
          $elements.each((index, element) => {
            const spec = Cypress.$(element).text();
            specsArray.push(spec);
          });

          return cy.wrap(specsArray);
        });
    });
  }
  static getCartProductObjectByProductName(name) {
    return this.getProductIndexByName(name).then((index) => {
      let productName;
      let specifications;
      let model;
      let unitPrice;
      let quantity;
      let total;

      return ShoppingCartPage.getProductNameByItemIndex(index)
        .then((name) => {
          productName = name;
        })
        .then(() => {
          return ShoppingCartPage.getProductSpecsByItemIndex(index);
        })
        .then((specs) => {
          specifications = specs;
        })
        .then(() => {
          return ShoppingCartPage.getProductModelNumberByItemIndex(index);
        })
        .then((modelNumber) => {
          model = modelNumber;
        })
        .then(() => {
          return ShoppingCartPage.getUnitPriceByItemIndex(index);
        })
        .then((price) => {
          unitPrice = price;
        })
        .then(() => {
          return ShoppingCartPage.getQuantityByItemIndex(index);
        })
        .then((itemQuantity) => {
          quantity = itemQuantity;
        })
        .then(() => {
          return ShoppingCartPage.getTotalByItemIndex(index);
        })
        .then((itemTotal) => {
          total = itemTotal;
        })
        .then(() => {
          return cy.wrap(
            new CartProduct(
              productName,
              specifications,
              model,
              unitPrice,
              quantity,
              total
            )
          );
        });
    });
  }

  static getProductIndexByName(name) {
    let productNameLinkSelector = this.nameBoxesBaseSelector + ") > a";

    return new Cypress.Promise((resolve, reject) => {
      cy.get(productNameLinkSelector)
        .each(($el, index, $list) => {
          const text = $el.text();
          if (text.includes(name)) {
            resolve(index);
          }
        })
        .then(() => {
          // None of the elements matched
          resolve(-1);
        });
    });
  }
  static getCartProductObjectByProductNameAndSpecs(name, specs) {}
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

  static getNumberOfProductsInCart() {
    return cy.document().then((doc) => {
      let count = doc.querySelectorAll(this.shoppingCartTableRowsPath).length;
      if (count > 0) {
        count--;
      }
      return count;
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
    return cy.get(localSelector).eq(i).invoke("attr", "value");
  }
  static getUnitPriceByItemIndex(i) {
    let localSelector =
      this.shoppingCartTableRowsPath +
      this.tableDataNthChildPath +
      this.unitPriceIndex +
      ")";
    return cy.get(localSelector).eq(i).invoke("text");
  }

  static getProductNameByItemIndex(i) {
    let localSelector =
      this.shoppingCartTableRowsPath +
      this.tableDataNthChildPath +
      this.nameIndex +
      ") a";
    return cy.get(localSelector).eq(i).invoke("text");
  }
  static getProductModelNumberByItemIndex(i) {
    let localSelector =
      this.shoppingCartTableRowsPath +
      this.tableDataNthChildPath +
      this.modelIndex +
      ")";
    return cy.get(localSelector).eq(i).invoke("text");
  }
}
