import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { HomePage } from "../../../../support/pageObjects/HomePage";
import { SearchBar } from "../../../../support/pageObjects/SearchBar";
import { SearchResultsPage } from "../../../../support/pageObjects/SearchResultsPage";

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
      console.log("Number Of Products:", numberOfProducts);
    });
  }
);

Then(
  "Product details Page Corresponding with selected entry is displayed",
  () => {
    console.log("test");
  }
);
