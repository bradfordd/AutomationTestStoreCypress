export class RadioButtonSelectionSet {
  static specificationsRadioPath = "div.input-group.col-sm-10 input";
  //Indexed radio buttons: div.input-group.col-sm-10 label:nth-of-type(1) input

  static getRadioButtonsGroup() {
    return cy.get(this.radioButtonsGroupPath);
  }

  static hasSelections() {
    return cy
      .get(RadioButtonSelectionSet.specificationsRadioPath)
      .then((specificationElements) => {
        return specificationElements.length > 0;
      });
  }

  static getNthRadioButton(n) {}

  //   static selectRadioButtonByValue(value) {
  //     this.getRadioButtonsGroup().check(value);
  //   }

  //   static selectNthRadioButton(n) {
  //     this.getRadioButtonsGroup().eq(n).check();
  //   }

  //   static getSelectedRadioButton() {
  //     return this.getRadioButtonsGroup().filter(":checked");
  //   }
}
