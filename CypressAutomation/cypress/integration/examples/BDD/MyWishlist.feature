@WebTest @Wishlist
Feature: Users have the ability to add items to wishlist and view said wishlist later
  
  Background:
  Given User Navigates to ATS HomePage and is logged in
	
  Scenario: User adds an item to their wishlist
    Given User Selects an item and adds item to their wishlist
    And User Navigates back to their user dashboard and views their wishlist items
    Then User is shown their wishlist with the item they added being present
  
