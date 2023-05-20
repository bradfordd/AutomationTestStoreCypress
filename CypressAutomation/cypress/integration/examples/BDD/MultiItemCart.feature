@WebTest 
Feature: Users have the ability to add multiple items to their cart and all the items are shown as well as the correct price sum when their cart is navigated to

 Background:
  Given User Navigates to ATS HomePage and is logged in 

  @CartTest
  Scenario: User adds multiple items to their cart
  Given User Adds multiple items to their cart after searching for "<searchterm>"
  And User Navigates to their cart
  Then Cart reflecting items added to cart is shown

  Examples:
    | searchterm |
    | perfume    |
#    | heel       |
#    | body       |
#    | Makeup     |
#    | Gift Sets  |
#    | Shampoo    |
#    | Conditioner|
#    | Mascara    |