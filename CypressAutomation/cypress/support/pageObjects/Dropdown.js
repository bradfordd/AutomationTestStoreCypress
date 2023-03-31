export class Dropdown {
  //Example: .block_3 select > option
  dropdownMenuPath = "";
  dropdownMenuOptionsPath = "";

  constructor(dropdownMenuPath) {
    this.dropdownMenuPath = dropdownMenuPath;
    this.dropdownMenuOptionsPath = dropdownMenuPath + " > option";
  }

  getDropdownMenu() {
    return cy.get(this.dropdownMenuPath);
  }

  getDropdownMenuOptions() {
    return cy.get(this.dropdownMenuOptionsPath);
  }

  getNumberOfDropdownMenuOptions() {
    return this.getDropdownMenuOptions().then(($dropdownOptions) => {
      return $dropdownOptions.length;
    });
  }

  getNthDropdownMenuOption(n) {
    return this.getDropdownMenuOptions().eq(n);
  }

  selectNthDropdownMenuOption(n) {
    this.getNthDropdownMenuOption(n).then(($option) => {
      this.getDropdownMenu().select($option.val());
    });
  }
}
