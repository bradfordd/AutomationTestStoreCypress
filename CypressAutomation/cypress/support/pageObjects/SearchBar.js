export class SearchBar {
  static searchBarPath = "#filter_keyword";
  static searchBarEnterPath = ".fa-search";

  static getSearchInput() {
    return cy.get(SearchBar.searchBarPath);
  }

  static getSearchButton() {
    return cy.get(SearchBar.searchBarEnterPath);
  }

  static searchForItem(item) {
    SearchBar.getSearchInput().type(item);
    SearchBar.getSearchButton().click();
  }
}

//export default SearchBar;
