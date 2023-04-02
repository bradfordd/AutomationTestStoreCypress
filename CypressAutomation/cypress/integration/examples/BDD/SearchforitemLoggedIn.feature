@WebTest
Feature: Search for a Item and selects an item they want
  
  Background:
  Given User Navigates to ATS HomePage and is logged in
	
	@WebTest
  Scenario Outline: Searching for item and navigating to item Product Details Page
    Given User Searches For "<item>"
    And User selects first product on Search Results Page
    Then Product details Page Corresponding with selected entry is displayed

    
  Examples:
    | item       |
    | perfume    |
    | heel       |
    | body       |
    | Makeup     |
    | Gift Sets  |
    | Shampoo    |
    | Conditioner|
    | Mascara    |
        
  Scenario Outline: User searches for item, adds item to cart, then checks out
    Given User Searches For "<item>", then selects first item on search results page
    And User makes purchase specifications if necessary, adds item to cart and proceeds to checkout
    Then Checkout confirmation page displays
  
Examples:
    |  item      |
    | perfume |
    | heel |
    | Shampoo |
    | Conditioner |
  
