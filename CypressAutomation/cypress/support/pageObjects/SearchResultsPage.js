// support/pageObjects/AutomationTestStore.js

export class SearchResultsPage {
  // Selectors
  static searchInput = 'input[name="keyword"]';
  static searchButton = 'button[type="submit"]';
  static productTitlesLinks = ".fixed .prdocutname";
  static productContainers = ".product-container";

  // Methods
  static getProductTitleLinks() {
    return cy.get(SearchResultsPage.productTitlesLinks);
  }

  static getNumberOfProductsOnPage() {
    return SearchResultsPage.getProductTitleLinks().then(($productTitles) => {
      return $productTitles.length;
    });
  }
}
