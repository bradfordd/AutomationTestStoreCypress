import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { HomePage } from "../../../../support/pageObjects/HomePage";
import { SearchBar } from "../../../../support/pageObjects/SearchBar";
import { SearchResultsPage } from "../../../../support/pageObjects/SearchResultsPage";
import { ProductDetailsPage } from "../../../../support/pageObjects/ProductDetailsPage";

var currProductTitle = "";

Given("User Navigates to GRP HomePage without being logging in", () => {
  HomePage.visitHomePage();
});

Given("User Searches For {string}", function (item) {
  SearchBar.searchForItem(item);
});

When(
  "User is navigated to item category select Page, selects first category on page",
  () => {
    SearchResultsPage.getNumberOfProductsOnPage().then((numberOfProducts) => {
      expect(numberOfProducts).to.be.greaterThan(0);
    });
    SearchResultsPage.getNthProductTitle(0).then((productTitle) => {
      currProductTitle = productTitle;
    });
    SearchResultsPage.getNthProductLink(0).click();
  }
);

Then(
  "Product details Page Corresponding with selected entry is displayed",
  () => {
    ProductDetailsPage.getProductName()
      .invoke("text")
      .then((productName) => {
        expect(productName).to.equal(currProductTitle);
      });
  }
);
