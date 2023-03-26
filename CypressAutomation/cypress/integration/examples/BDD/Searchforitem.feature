Feature: Search for a Item and selects an item they want
  
  Background:
  Given User Navigates to GRP HomePage without being logging in
	
	@WebTest
  Scenario Outline: Searching for item and navigating to item Product Details Page
    Given User Searches For "<model>"
    And User is navigated to item category select Page, selects first category on page
    Then Product details Page Corresponding with selected entry is displayed
  
Examples:
    |  model      |
        |  perfume |