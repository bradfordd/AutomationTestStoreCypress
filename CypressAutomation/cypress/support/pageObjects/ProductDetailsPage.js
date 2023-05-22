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
  static productSpecifications = ".col-sm-10";

  static doCurrentSpecsMatchDesiredSpecs(desiredSpecs) {
    return this.getSelectedSpecifications().then((selectedSpecs) => {
      if (desiredSpecs.length != selectedSpecs.length) {
        return false;
      }
      for (let i = 0; i < desiredSpecs.length; i++) {
        debugger;
        if (!selectedSpecs[i].includes(desiredSpecs[i])) {
          return false;
        }
      }
      return true;
    });
  }
  static getSelectedSpecifications() {
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

  static areSpecificationsPresent() {
    return cy.document().then((doc) => {
      const specificationElements = doc.querySelectorAll(
        this.productSpecifications
      );
      return cy.wrap(specificationElements.length > 0);
    });
  }

  static getSpecificationSelectors() {
    return cy.get(this.productSpecifications);
  }

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
