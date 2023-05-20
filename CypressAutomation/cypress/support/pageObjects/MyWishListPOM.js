export class MyWishList {
  //IMPORTANT NOTE: All indexes start at 1 for this class
  static tableImageIndex = 1;
  static tableNameIndex = 2;
  static tableModelIndex = 3;
  static tableUnitPriceIndex = 4;
  static tableAddedToWishlistIndex = 5;
  static tableActionsIndex = 6;

  static wishlistContainsGivenProductModel(modelNumber) {
    return this.findGivenModelTableRow(modelNumber).then((index) => {
      console.log("ModelNumber: " + index);
      debugger;
      return index != -1;
    });
  }
  static wishlistContainsGivenProductName(name) {
    return this.findGivenNameTableRow(name).then((index) => {
      console.log("Name: " + index);
      debugger;
      return index != -1;
    });
  }
  static findGivenAddedToWishListTableRow(name) {
    return new Cypress.Promise((resolve) => {
      let row = -1;
      this.getAllTableAddedToWishListCells()
        .each(($element, index) => {
          const elementName = $element.text();
          if (elementName.includes(name)) {
            row = index + 1;
            return false; // break the each loop once the name is found
          }
        })
        .then(() => {
          resolve(row);
        });
    });
  }
  static findGivenUnitPriceTableRow(name) {
    return new Cypress.Promise((resolve) => {
      let row = -1;
      this.getAllTableUnitPriceCells()
        .each(($element, index) => {
          const elementName = $element.text();
          if (elementName.includes(name)) {
            row = index + 1;
            return false; // break the each loop once the name is found
          }
        })
        .then(() => {
          resolve(row);
        });
    });
  }
  static findGivenModelTableRow(name) {
    return new Cypress.Promise((resolve) => {
      let row = -1;
      this.getAllTableModelCells()
        .each(($element, index) => {
          const elementName = $element.text();
          if (elementName.includes(name)) {
            row = index + 1;
            return false; // break the each loop once the name is found
          }
        })
        .then(() => {
          resolve(row);
        });
    });
  }
  static findGivenNameTableRow(name) {
    return new Cypress.Promise((resolve) => {
      let row = -1;
      this.getAllTableNameCells()
        .each(($element, index) => {
          const elementName = $element.text();
          console.log("Element Name: " + elementName);
          console.log("Element Name: " + name);
          if (elementName.includes(name)) {
            row = index + 1;
            return false; // break the each loop once the name is found
          }
        })
        .then(() => {
          resolve(row);
        });
    });
  }
  static getNthTableNameCell(n) {
    let localPath = this.createPathToAccessGivenTableRowAndColumn(
      n,
      this.tableNameIndex
    );
    return cy.get(localPath);
  }
  static getNthTableActionsPriceCell(n) {
    let localPath = this.createPathToAccessGivenTableRowAndColumn(
      n,
      this.tableActionsIndex
    );
    return cy.get(localPath);
  }

  static getNthAddedToWishlistPriceCell(n) {
    let localPath = this.createPathToAccessGivenTableRowAndColumn(
      n,
      this.tableAddedToWishlistIndex
    );
    return cy.get(localPath);
  }
  static getNthTableUnitPriceCell(n) {
    let localPath = this.createPathToAccessGivenTableRowAndColumn(
      n,
      this.tableUnitPriceIndex
    );
    return cy.get(localPath);
  }
  static getNthTableModelCell(n) {
    let localPath = this.createPathToAccessGivenTableRowAndColumn(
      n,
      this.tableModelIndex
    );
    return cy.get(localPath);
  }
  static getAllTableActionsCells() {
    let localPath = this.createPathToAccessGivenTableColumn(
      this.tableActionsIndex
    );
    return cy.get(localPath);
  }

  static getAllTableNameCells() {
    let localPath = this.createPathToAccessGivenTableColumn(
      this.tableNameIndex
    );

    return cy.get(localPath);
  }

  static getAllTableAddedToWishListCells() {
    let localPath = this.createPathToAccessGivenTableColumn(
      this.tableAddedToWishlistIndex
    );

    return cy.get(localPath);
  }

  static getAllTableImageCells() {
    let localPath = this.createPathToAccessGivenTableColumn(
      this.tableImageIndex
    );

    return cy.get(localPath);
  }

  static getAllTableModelCells() {
    let localPath = this.createPathToAccessGivenTableColumn(
      this.tableModelIndex
    );

    return cy.get(localPath);
  }

  static getAllTableUnitPriceCells() {
    let localPath = this.createPathToAccessGivenTableColumn(
      this.tableUnitPriceIndex
    );

    return cy.get(localPath);
  }

  static createPathToAccessGivenTableRowAndColumn(row, column) {
    row = row + 1;
    return "tbody tr:nth-child(" + row + ") td:nth-child(" + column + ")";
  }
  static getNthTableImageCell(n) {
    let localPath = this.createPathToAccessGivenTableRowAndColumn(
      n,
      this.tableImageIndex
    );
    return cy.get(localPath);
  }

  static createPathToAccessGivenTableColumn(column) {
    return "tbody tr td:nth-child(" + column + ")";
  }

  static createPathToAccessGivenTableRow(row) {
    row = row + 1;
    return "tbody tr:nth-child(" + row + ") td";
  }

  static deleteAllWishlistItems() {
    cy.get(".btn-remove").each(($el) => {
      cy.wrap($el).click();
    });
  }
}
