Feature: Search for a Item and selects an item they want
  
  Background:
  Given User Navigates to ATS HomePage without being logging in
	
	@WebTest
  Scenario Outline: Searching for item and navigating to item Product Details Page
    Given User Searches For "<item>"
    And User is navigated to item search page
    Then Product details Page Corresponding with selected entry is displayed
  
Examples:
    |  item      |
    | perfume |
    | Makeup |
    | Gift Sets |
    | Shampoo |
    | Conditioner |
    | Mascara |