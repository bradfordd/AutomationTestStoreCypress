export class AddressBook {
  static backButtonPath = ".btn[title='Back']";
  static newAddressButtonPath = ".btn[title='New Address']";
  static firstNameInputPath = "#AddressFrm_firstname";
  static lastNameInputPath = "#AddressFrm_lastname";
  static companyInputPath = "#AddressFrm_company";
  static addressInputPath = "#AddressFrm_address_1";
  static cityInputPath = "#AddressFrm_city";
  static zoneInputPath = "#AddressFrm_zone_id";
  static zipInputPath = "#AddressFrm_postcode";
  static countryInputPath = "#AddressFrm_country_id";
  static continueButtonPath = '[title="Continue"]';
  static alertPath = ".alert";
  static deletePath = '[title="Delete"]';
  static addressBox = ".genericbox address";

  static getLastAddressBoxText() {
    return cy.get("body").then(($body) => {
      if ($body.find(this.addressBox).length) {
        return cy.get(this.addressBox, { timeout: 0 }).then(($elements) => {
          const $lastElement = $elements.last();
          return cy
            .wrap($lastElement)
            .invoke("text")
            .then(($text) => {
              return cy.wrap($text);
            });
        });
      } else {
        return cy.wrap("No Address Found");
      }
    });
  }
  static getAllAddressBoxesText() {
    return cy.get("body").then(($body) => {
      if ($body.find(this.addressBox).length) {
        return cy.get(this.addressBox, { timeout: 0 }).then(($elements) => {
          const addressTextArray = $elements
            .map((_, el) => Cypress.$(el).text())
            .get();
          return cy.wrap(addressTextArray);
        });
      } else {
        return cy.wrap([]);
      }
    });
  }
  static clickAllDeleteButtons() {
    cy.get("body").then(($body) => {
      if ($body.find(this.deletePath).length) {
        cy.get(this.deletePath, { timeout: 0 }).then(($elements) => {
          const $lastElement = $elements.last();
          cy.wrap($lastElement)
            .click()
            .then(() => {
              this.clickAllDeleteButtons();
            });
        });
      }
    });
  }

  static expectedAddressAddedAlertText() {
    return "Your address has been successfully inserted";
  }
  static getAlertText() {
    return cy.get(AddressBook.alertPath).invoke("text");
  }
  static getContinueButton() {
    return cy.get(AddressBook.continueButtonPath);
  }
  static clickContinueButton() {
    AddressBook.getContinueButton().click();
  }
  static getBackButton() {
    return cy.get(AddressBook.backButtonPath);
  }

  static clickBackButton() {
    AddressBook.getBackButton().click();
  }

  static getNewAddressButton() {
    return cy.get(AddressBook.newAddressButtonPath);
  }

  static clickNewAddressButton() {
    AddressBook.getNewAddressButton().click();
  }

  static getFirstNameInput() {
    return cy.get(AddressBook.firstNameInputPath);
  }

  static enterNewFirstName(firstName) {
    AddressBook.getFirstNameInput().clear();
    AddressBook.getFirstNameInput().type(firstName);
  }

  static getLastNameInput() {
    return cy.get(AddressBook.lastNameInputPath);
  }

  static enterNewLastName(lastName) {
    AddressBook.getLastNameInput().clear();
    AddressBook.getLastNameInput().type(lastName);
  }

  static getCompanyInput() {
    return cy.get(AddressBook.companyInputPath);
  }

  static enterNewCompany(company) {
    AddressBook.getCompanyInput().clear();
    AddressBook.getCompanyInput().type(company);
  }

  static getAddressInput() {
    return cy.get(AddressBook.addressInputPath);
  }

  static enterNewAddress(address) {
    AddressBook.getAddressInput().clear();
    AddressBook.getAddressInput().type(address);
  }

  static getCityInput() {
    return cy.get(AddressBook.cityInputPath);
  }

  static enterNewCity(city) {
    AddressBook.getCityInput().clear();
    AddressBook.getCityInput().type(city);
  }

  static getZoneInput() {
    return cy.get(AddressBook.zoneInputPath);
  }

  static selectZone(zone) {
    AddressBook.getZoneInput().select(zone);
  }

  static getZipInput() {
    return cy.get(AddressBook.zipInputPath);
  }

  static enterNewZip(zip) {
    AddressBook.getZipInput().clear();
    AddressBook.getZipInput().type(zip);
  }

  static getCountryInput() {
    return cy.get(AddressBook.countryInputPath);
  }

  static selectCountry(country) {
    AddressBook.getCountryInput().select(country);
  }
}
