export class ProductSpecifications {
  static specificationsBasePath = "div.input-group.col-sm-10";
  static specificationsDropdownPath = "div.input-group.col-sm-10 select";
  static specificationsDropdownOptionsPath =
    "div.input-group.col-sm-10 select option";
  static specificationsRadioPath = "div.input-group.col-sm-10 input";
  static specificationsRadioLabelPath = "div.input-group.col-sm-10 label";
  //static specificationsRadioPath ='div.input-group.col-sm-10 input[type="radio"]'
  //Indexed radio buttons: div.input-group.col-sm-10 label:nth-of-type(1) input
  static hasSelections() {
    return cy.document().then((doc) => {
      const specificationElements = doc.querySelectorAll(
        ProductSpecifications.specificationsBasePath
      );
      return cy.wrap(specificationElements.length > 0);
    });
  }

  static hasRadioButtons() {
    return cy.document().then((doc) => {
      const specificationElements = doc.querySelectorAll(
        ProductSpecifications.specificationsRadioPath
      );
      return cy.wrap(specificationElements.length > 0);
    });
  }

  static getRadioButtons() {
    return cy.get(ProductSpecifications.specificationsRadioPath);
  }

  static getNthRadioButton(n) {
    return cy.get(ProductSpecifications.specificationsRadioPath).eq(n);
  }

  static getNthRadioButtonText(n) {
    return cy
      .get(ProductSpecifications.specificationsRadioPath)
      .eq(n)
      .invoke("text")
      .then((labelText) => {
        const option = ProductSpecifications.removeNbsp(labelText);
        return option;
      });
  }

  static hasDropdownMenu() {
    return cy.document().then((doc) => {
      const specificationElements = doc.querySelectorAll(
        ProductSpecifications.specificationsDropdownPath
      );
      return cy.wrap(specificationElements.length > 0);
    });
  }
  static getDropdownMenu() {
    return cy.get(ProductSpecifications.specificationsDropdownPath);
  }
  static getDropdownMenuOptions() {
    return cy.get(ProductSpecifications.specificationsDropdownOptionsPath);
  }
  static getNumberOfDropdownMenuOptions() {
    return ProductSpecifications.getDropdownMenuOptions().then(
      (dropdownMenuOptions) => {
        return dropdownMenuOptions.length;
      }
    );
  }

  static getNthDropdownMenuOption(n) {
    return cy
      .get(ProductSpecifications.specificationsDropdownOptionsPath)
      .eq(n);
  }

  static getNthDropdownMenuOptionText(n) {
    return ProductSpecifications.getNthDropdownMenuOption(n)
      .invoke("text")
      .then((optionText) => {
        return optionText;
      });
  }

  static selectNthDropdownMenuOption(n) {
    cy.get(ProductSpecifications.specificationsDropdownPath).select(n);
  }

  static selectFirstAvailableDropdownOption() {
    ProductSpecifications.getNumberOfDropdownMenuOptions().then(
      (numberOfDropdownOptions) => {
        const findAvailableOption = (index) => {
          if (index < numberOfDropdownOptions) {
            ProductSpecifications.getNthDropdownMenuOptionText(index).then(
              (menuOptionText) => {
                if (!ProductSpecifications.containsOutOfStock(menuOptionText)) {
                  ProductSpecifications.selectNthDropdownMenuOption(index);
                } else {
                  findAvailableOption(index + 1);
                }
              }
            );
          }
        };
        findAvailableOption(0);
      }
    );
  }

  static containsOutOfStock(optionText) {
    return optionText.includes("Out of Stock");
  }
  static removeNbsp(string) {
    return string.replace(/&nbsp;/g, "");
  }
}

export default ProductSpecifications;
