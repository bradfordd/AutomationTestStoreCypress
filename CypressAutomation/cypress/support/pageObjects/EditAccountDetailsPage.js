export class EditAccountDetailsPage {
  static firstNameInputPath = "#AccountFrm_firstname";
  static lastNameInputPath = "#AccountFrm_lastname";
  static emailInputPath = "#AccountFrm_email";
  static telephoneInputPath = "#AccountFrm_telephone";
  static faxInputPath = "#AccountFrm_fax";
  static continueButtonPath = '[title="Continue"]';

  static getFirstNameInputValue() {
    return EditAccountDetailsPage.getFirstNameInput()
      .invoke("val")
      .then((value) => {
        return value;
      });
  }
  static getLastNameInputValue() {
    return EditAccountDetailsPage.getLastNameInput()
      .invoke("val")
      .then((value) => {
        return value;
      });
  }
  static getEmailInputValue() {
    return EditAccountDetailsPage.getEmailInput()
      .invoke("val")
      .then((value) => {
        return value;
      });
  }
  static getTelephoneInputValue() {
    return EditAccountDetailsPage.getTelephoneInput()
      .invoke("val")
      .then((value) => {
        return value;
      });
  }
  static getFaxInputValue() {
    return EditAccountDetailsPage.getFaxInput()
      .invoke("val")
      .then((value) => {
        return value;
      });
  }

  static getContinueButton() {
    return cy.get(EditAccountDetailsPage.continueButtonPath);
  }
  static clickContinueButton() {
    EditAccountDetailsPage.getContinueButton().click();
  }
  static getFirstNameInput() {
    return cy.get(EditAccountDetailsPage.firstNameInputPath);
  }
  static getLastNameInput() {
    return cy.get(EditAccountDetailsPage.lastNameInputPath);
  }
  static getEmailInput() {
    return cy.get(EditAccountDetailsPage.emailInputPath);
  }
  static getTelephoneInput() {
    return cy.get(EditAccountDetailsPage.telephoneInputPath);
  }
  static getFaxInput() {
    return cy.get(EditAccountDetailsPage.faxInputPath);
  }
  static clearFirstNameInput() {
    EditAccountDetailsPage.getFirstNameInput().clear();
  }
  static clearLastNameInput() {
    EditAccountDetailsPage.getLastNameInput().clear();
  }
  static clearEmailInput() {
    EditAccountDetailsPage.getEmailInput().clear();
  }
  static clearTelephoneInput() {
    EditAccountDetailsPage.getTelephoneInput().clear();
  }
  static clearFaxInput() {
    EditAccountDetailsPage.getFaxInput().clear();
  }
  static enterTextToFirstNameInput(input) {
    EditAccountDetailsPage.getFirstNameInput().type(input);
  }
  static enterTextToLastNameInput(input) {
    EditAccountDetailsPage.getLastNameInput().type(input);
  }
  static enterTextToEmailInput(input) {
    EditAccountDetailsPage.getEmailInput().type(input);
  }
  static enterTextToTelephoneInput(input) {
    EditAccountDetailsPage.getTelephoneInput().type(input);
  }
  static enterTextToFaxInput(input) {
    EditAccountDetailsPage.getFaxInput().type(input);
  }
  static replaceFirstName(newFirstName) {
    EditAccountDetailsPage.clearFirstNameInput();
    EditAccountDetailsPage.enterTextToFirstNameInput(newFirstName);
  }
  static replaceLastName(newLastName) {
    EditAccountDetailsPage.clearLastNameInput();
    EditAccountDetailsPage.enterTextToLastNameInput(newLastName);
  }
  static replaceEmail(newEmail) {
    EditAccountDetailsPage.clearEmailInput();
    EditAccountDetailsPage.enterTextToEmailInput(newEmail);
  }
  static replaceTelephone(newTelephone) {
    EditAccountDetailsPage.clearTelephoneInput();
    EditAccountDetailsPage.enterTextToTelephoneInput(newTelephone);
  }
  static replaceFax(newFaxNumber) {
    EditAccountDetailsPage.clearFaxInput();
    EditAccountDetailsPage.enterTextToFaxInput(newFaxNumber);
  }
}
