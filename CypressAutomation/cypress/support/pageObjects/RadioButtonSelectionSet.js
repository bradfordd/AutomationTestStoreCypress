export class RadioButtonSelectionSet {
  static specificationsRadioPath = "div.input-group.col-sm-10 input";
  //Indexed radio buttons: div.input-group.col-sm-10 label:nth-of-type(1) input

  static getRadioButtonsGroup() {
    return cy.get(this.radioButtonsGroupPath);
  }

  static hasRadioButtons() {
    return cy
      .get(RadioButtonSelectionSet.specificationsRadioPath)
      .then((specificationElements) => {
        return specificationElements.length > 0;
      });
  }
}
