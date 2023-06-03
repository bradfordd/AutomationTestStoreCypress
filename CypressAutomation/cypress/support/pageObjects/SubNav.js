export class SubNav {
  static SubNavBarSelector = "ul.nav-pills";
  static SubNavBarCategorySelector = "ul.nav-pills > li > a";
  static selectSubNavCategory(categoryName) {
    cy.get(this.SubNavBarCategorySelector).each(($element, index) => {
      const text = $element.text(); // Example: get the text content of the element
      if (text.includes(categoryName)) {
        cy.log("MATCH FOUND");
        cy.wrap($element).click();
      }
    });
  }
}
