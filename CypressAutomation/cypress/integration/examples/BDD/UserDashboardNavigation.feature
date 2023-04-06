@WebTest
Feature: Search for a Item and selects an item they want
  
  Background:
  Given User Navigates to ATS HomePage, logs in, and then navigates to user dashboard
	
  #Scenario: User Edits Account Details
  #  Given User Selects Edit Account Details
  #  And User Edits Account Details and clicks continue
  #  Then User Selects Edit Account Details and Account Details reflect changes

	@AddressTest
  Scenario: User Adds new address to address book
    Given User Selects Edit Address Book
    And Enters in the new Address information and clicks continue
    Then Address book reflects added address, user then deletes said address