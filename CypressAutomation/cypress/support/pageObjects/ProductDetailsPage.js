// support/pageObjects/ProductDetailsPage.js
import { CartProduct } from "../models/CartProduct";

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
  static productSpecifications = ".col-sm-10";
  static productQuantity = "#product_quantity";
  static totalPricePath = "span.total-price";

  static getTotalPrice() {
    cy.get(this.totalPricePath)
      .invoke("text")
      .should("not.be.empty")
      .and("match", /\$/);
    return cy.get(this.totalPricePath);
  }

  static getCartProductObjectFromProductDetails() {
    let productName;
    let selectedSpecs;
    let modelNumber;
    let productPrice;
    let productQuantity;
    let totalPrice;

    this.getProductName()
      .invoke("text")
      .then((value) => {
        productName = value;
      });

    this.getSelectedSpecifications().then((value) => {
      selectedSpecs = value;
    });

    this.getModelNumber().then((value) => {
      modelNumber = value;
    });

    this.getProductPrice()
      //      .invoke("text")
      .then((value) => {
        debugger;
        productPrice = value;
      });

    this.getProductQuantity()
      .invoke("attr", "value")
      .then((value) => {
        productQuantity = value;
      });
    this.getTotalPrice()
      .invoke("prop", "outerHTML")
      .then((outerHTML) => {
        // Log the outer HTML
        cy.log("outerHTML: " + outerHTML);
      });

    this.getTotalPrice()
      .invoke("text")
      .then((value) => {
        totalPrice = value;
        cy.log("Total Price: " + totalPrice);
      });

    return cy.then(() => {
      return new CartProduct(
        productName,
        selectedSpecs,
        modelNumber,
        productPrice,
        productQuantity,
        totalPrice
      );
    });
  }

  static getProductQuantity() {
    return cy.get(this.productQuantity);
  }
  static doCurrentSpecsMatchDesiredSpecs(desiredSpecs) {
    return this.getSelectedSpecifications().then((selectedSpecs) => {
      if (desiredSpecs.length != selectedSpecs.length) {
        return false;
      }
      for (let i = 0; i < desiredSpecs.length; i++) {
        if (!selectedSpecs[i].includes(desiredSpecs[i])) {
          return false;
        }
      }
      return true;
    });
  }
  static getSelectedSpecifications() {
    return this.hasSpecifications().then((hasSpecifications) => {
      if (hasSpecifications) {
        let selectedElementsArray = [];
        return cy
          .get(this.productSpecifications)
          .each(($specEl, index, $specifications) => {
            // Convert the Cypress object to a jQuery object
            if ($specEl.find("input[type=radio]").length) {
              cy.wrap($specEl)
                .find("input[type='radio']:checked")
                .each(($currButton, radioIndex, $radioButtons) => {
                  cy.wrap($currButton)
                    .parent("label")
                    .then(($label) => {
                      const text = $label.text().trim();
                      selectedElementsArray.push(text);
                    });
                });
            } else if ($specEl.find("select").length) {
              cy.wrap($specEl)
                .find("option:selected")
                .each(($selectionMade) => {
                  const text = $selectionMade.text().trim();
                  selectedElementsArray.push(text);
                });
            } else {
              selectedElementsArray.push("No Selection Made");
            }
          })
          .then(() => {
            // Use the array here, after all async tasks are done.
            return cy.wrap(selectedElementsArray);
          });
      } else {
        return cy.wrap(
          new Array("No Specifications Available for this Product")
        );
      }
    });
  }

  // Helper function to check if radio button is disabled
  static checkIfRadioButtonIsDisabled($radioButton) {
    cy.wrap($radioButton).then(($rb) => {
      if ($rb.attr("disabled") !== undefined) {
        throw new Error(
          "Could not make selection due to radio button being disabled"
        );
      } else {
        cy.wrap($rb).click(); // Clicks the radio button if it is not disabled
      }
    });
  }

  // Helper function to get radio button and check if it's disabled
  static getRadioButtonAndCheckIfDisabled(id) {
    cy.get(`input[id="${id}"]`).then(($radioButton) => {
      this.checkIfRadioButtonIsDisabled($radioButton);
    });
  }

  // Helper function to check if text includes spec and get radio button
  static checkSpecAndFetchRadioButton($label, spec) {
    cy.wrap($label)
      .invoke("text")
      .then((text) => {
        text = text.trim(); // Trim the text to remove any whitespace

        // Compare the text with the value from specs array
        if (text.includes(spec)) {
          // If a match is found, fetch 'for' attribute which is equal to id of the radio button
          cy.wrap($label)
            .invoke("attr", "for")
            .then((id) => this.getRadioButtonAndCheckIfDisabled(id));
        }
      });
  }

  // The main function
  static makeSpecifications(specs) {
    return cy
      .get(this.productSpecifications)
      .should("have.length", specs.length)
      .each(($el, index) => {
        if ($el.find("input[type=radio]").length) {
          // Find the associated label
          cy.wrap($el)
            .find("label")
            .each(($label) => {
              this.checkSpecAndFetchRadioButton($label, specs[index]);
            });
        } else if ($el.find("select").length) {
          cy.wrap($el)
            .find("select")
            .first()
            .find("option:contains(" + specs[index] + ")")
            .then(($option) => {
              cy.wrap($el).find("select").first().select($option.val());
            });
        }
      });
  }

  static hasSpecifications() {
    return cy.document().then((doc) => {
      const specificationElements = doc.querySelectorAll(
        this.productSpecifications
      );
      return cy.wrap(specificationElements.length > 0);
    });
  }

  static areSpecificationsPresent() {
    return cy.document().then((doc) => {
      const specificationElements = doc.querySelectorAll(
        this.productSpecifications
      );
      return cy.wrap(specificationElements.length > 0);
    });
  }

  static makeDefaultSpecifications() {
    return cy.get(this.productSpecifications).then(($els) => {
      cy.wrap($els).each(($el) => {
        if ($el.find("input[type=radio]").length) {
          // Find the associated label
          cy.wrap($el)
            .find("input[type=radio]")
            .first()
            .then(($button) => {
              cy.wrap($button).check();
            });
        } else if ($el.find("select").length) {
          cy.wrap($el)
            .find("select")
            .first()
            .find("option:enabled")
            .first()
            .then(($option) => {
              cy.wrap($el).find("select").first().select($option.val());
            });
        }
      });
    });
  }

  static getRadioButtonSelectedElement($jqueryEl) {
    return cy.wrap($jqueryEl).then(($wrappedEl) => {
      const radioValue = $wrappedEl.find('input[type="radio"]:checked').val();
      return radioValue || "No Selection Made"; // return the value or an empty string if the value is undefined
    });
  }

  static getDropdownSelectedElement($jqueryEl) {
    return cy.wrap($jqueryEl).then(($wrappedEl) => {
      const selectedOption = $wrappedEl.find("select option:selected").text();
      return selectedOption || "No Selection Made"; // return the selected option to continue the chain
    });
  }

  static logElementHTML(jqueryElement) {
    let outerHTML = jqueryElement[0].outerHTML;
    console.log(outerHTML);
  }

  static getSpecificationSelectors() {
    return cy.get(this.productSpecifications);
  }

  static getProductInfo() {
    return cy.get(this.productInfoPath);
  }

  static getModelNumber() {
    return this.getProductInfo().then(($list) => {
      let modelNumber = "";

      $list.each((index, el) => {
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
    let unitPrice = 0.0;

    return new Cypress.Promise((resolve, reject) => {
      ProductDetailsPage.getSelectedSpecifications()
        .each((spec, index, specifications) => {
          const addedCost = this.parsePriceValue(spec);
          unitPrice += addedCost;
        })
        .then(() => {
          cy.get(ProductDetailsPage.productPrice)
            .invoke("text")
            .then((productPriceText) => {
              const addedCost = this.parsePriceValue(productPriceText);
              unitPrice += addedCost;
              resolve(unitPrice);
            });
        });
    });
  }

  static getAddToCartButton() {
    return cy.get(ProductDetailsPage.addToCartButton);
  }
  static clickAddToCartButton() {
    return cy.get(ProductDetailsPage.addToCartButton).click();
  }

  static parsePriceValue(inputString) {
    const regex = /\$(\d+\.\d+)/;
    const match = regex.exec(inputString);
    if (match) {
      return parseFloat(match[1]);
    }
    return 0.0;
  }

  static getProductDescription() {
    return cy.get(ProductDetailsPage.productDescription);
  }
}
