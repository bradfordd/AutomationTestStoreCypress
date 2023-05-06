# Automation Test Store Cypress

This repository contains a Cypress test automation suite for the Automation Test Store, demonstrating end-to-end testing capabilities using the Cypress framework.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Running Tests](#running-tests)
4. [Test Structure](#test-structure)
5. [Contributing](#contributing)
6. [License](#license)

## Prerequisites

Before getting started, please ensure you have the following software installed on your local machine:

- [Node.js](https://nodejs.org/en/download/) (LTS version recommended)
- [Git](https://git-scm.com/downloads)

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/bradfordd/AutomationTestStoreCypress.git
   ```

2. Navigate to the `CypressAutomation` directory:

   ```
   cd AutomationTestStoreCypress/CypressAutomation
   ```

3. Install the required dependencies:
   ```
   npm install
   ```

## Running Tests

To run the tests in the interactive Test Runner mode, use the following command:

```
npm run test
```

To run the tests in headless mode, use the following command:

```
npm run headTest
```

To run a specified feature file, use the following command:

```
node_modules/.bin/cypress run test --spec 'cypress\integration\examples\BDD\FeatureFileName.feature' --headed --no-exit
```

## Test Structure

The tests are organized into the following directories:

- `fixtures`: Contains data files used for test inputs, such as users and products.
- `integration`: Contains the actual test files.
  - `test_store`: Contains test cases for the Automation Test Store.
- `plugins`: Contains the Cypress plugins.
- `support`: Contains custom commands and other helper functions.

## Contributing

1. Fork the repository and create a new branch for your feature or bug fix.
2. Develop your changes and write appropriate tests.
3. Ensure all tests pass by running `npm run cy:run`.
4. Commit your changes and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

# UserDashboardNavigation.feature Documentation

This feature file, `UserDashboardNavigation.feature`, contains test scenarios for navigating the user dashboard, editing account details, and managing the address book.

## Feature: Search for an Item and selects an item they want

This feature covers the user's ability to navigate to the ATS HomePage, log in, and then proceed to their user dashboard.

### Background

The `Background` step initializes the test environment by navigating the user to the ATS HomePage, logging them in, and then directing them to the user dashboard.

### Scenario: User Edits Account Details

This scenario tests the functionality of editing account details.

1. **Given User Selects Edit Account Details** - The user selects the option to edit their account details.
2. **And User Edits Account Details and clicks continue** - The user makes changes to their account details and clicks the "continue" button to save the changes.
3. **Then User Selects Edit Account Details and Account Details reflect changes** - The user selects the edit account details option again to confirm that the changes they made have been applied successfully.

### Scenario: User Adds new address to address book

This scenario tests the functionality of adding a new address to the user's address book.

1. **Given User Selects Edit Address Book** - The user selects the option to edit their address book.
2. **And Enters in the new Address information and clicks continue** - The user enters the required information for a new address and clicks the "continue" button to save the new address to the address book.
3. **Then Address book reflects added address, user then deletes said address** - The user confirms that the new address is visible in the address book and then proceeds to delete the added address.

With these scenarios, the `UserDashboardNavigation.feature` file tests the user dashboard navigation, account detail editing, and address book management functionality.

# SearchForItemLoggedOut.feature Documentation

This feature file, `SearchForItemLoggedOut.feature`, contains test scenarios for searching for an item and navigating to the item's product details page while not being logged in.

## Feature: Search for an Item and selects an item they want

This feature covers the user's ability to search for an item and navigate to its product details page without being logged in.

### Background

The `Background` step initializes the test environment by navigating the user to the ATS HomePage without logging in.

### Scenario Outline: Searching for item and navigating to item Product Details Page

This scenario tests the functionality of searching for an item and navigating to the item's product details page while not being logged in. The test is performed for each item listed in the `Examples` table.

1. **Given User Searches For "<item>"** - The user enters the search query for the specified item.
2. **And User is navigated to item search page** - The user is redirected to the item search results page displaying the items matching their search query.
3. **Then Product details Page Corresponding with selected entry is displayed** - The user selects an item from the search results, and the corresponding product details page is displayed.

### Examples

The `Examples` table lists different items that will be used to test the scenario outline:

```plaintext
|  item      |
| perfume    |
| Makeup     |
| Gift Sets  |
| Shampoo    |
| Conditioner|
| Mascara    |
```

With these scenarios, the `SearchForItemLoggedOut.feature` file tests the search functionality and item navigation for users who are not logged in.

# SearchforItemLoggedIn.feature Documentation

This feature file, `SearchforItemLoggedIn.feature`, contains test scenarios for searching items and making purchases while logged in.

## Feature: Search for a Item and selects an item they want

This feature tests the user's ability to search for items, navigate to product details pages, and complete the checkout process while logged in.

### Background

The `Background` step initializes the test environment by navigating the user to the ATS HomePage and ensuring the user is logged in.

### @WebTest Scenario Outline: Searching for item and navigating to item Product Details Page

This scenario tests the functionality of searching for an item and navigating to the item's product details page.

1. **Given User Searches For "<item>"** - The user searches for a specific item.
2. **And User selects first product on Search Results Page** - The user selects the first product from the search results.
3. **Then Product details Page Corresponding with selected entry is displayed** - The user verifies that the product details page for the selected item is displayed.

The `Examples` table contains various items to search for, like "perfume", "heel", "body", and more.

### Scenario Outline: User searches for item, adds item to cart, then checks out

This scenario tests the functionality of searching for an item, adding the item to the cart, and completing the checkout process.

1. **Given User Searches For "<item>", then selects first item on search results page** - The user searches for a specific item and selects the first product from the search results.
2. **And User makes purchase specifications if necessary, adds item to cart and proceeds to checkout** - The user adds the item to the cart, makes any necessary purchase specifications, and proceeds to the checkout process.
3. **Then Checkout confirmation page displays** - The user verifies that the checkout confirmation page is displayed.

The `Examples` table contains various items to search for and test the checkout process, like "perfume", "heel", "Shampoo", and "Conditioner".

With these scenarios, the `SearchforItemLoggedIn.feature` file tests the item search and purchasing functionality for logged-in users.

# MyWishlist.feature Documentation

This feature file, `MyWishlist.feature`, contains a test scenario for adding items to a user's wishlist and viewing the wishlist later while logged in.

## Feature: Users have the ability to add items to wishlist and view said wishlist later

This feature tests the user's ability to add items to their wishlist and view the wishlist at a later time.

### Background

The `Background` step initializes the test environment by navigating the user to the ATS HomePage and ensuring the user is logged in.

### @WebTest Scenario: User adds an item to their wishlist

This scenario tests the functionality of adding an item to the user's wishlist and viewing the wishlist afterward.

1. **Given User Selects an item and adds item to their wishlist** - The user selects an item and adds it to their wishlist.
2. **And User Navigates back to their user dashboard and views their wishlist items** - The user navigates back to their user dashboard and views the items in their wishlist.
3. **Then User is shown their wishlist with the item they added being present** - The user verifies that the item they added to the wishlist is present in the wishlist.

With this scenario, the `MyWishlist.feature` file tests the wishlist functionality for logged-in users, ensuring that they can add items to their wishlist and view them later.

# MyWishlist.js Step Implementation Documentation

This step implementation file, `MyWishlist.js`, contains the code for the test steps described in the `MyWishlist.feature` file. The test ensures that users can add items to their wishlist and view the wishlist later while logged in.

## Import Statements

The necessary classes and functions are imported at the beginning of the file to be used in the step definitions:

```javascript
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { HomePage } from "../../../../support/pageObjects/HomePage";
import { SearchBar } from "../../../../support/pageObjects/SearchBar";
import { SearchResultsPage } from "../../../../support/pageObjects/SearchResultsPage";
import { ProductDetailsPage } from "../../../../support/pageObjects/ProductDetailsPage";
import { LoginOrRegisterButton } from "../../../../support/pageObjects/LoginOrRegisterButton";
import { LoginPage } from "../../../../support/pageObjects/LoginPage";
import { ProductSpecifications } from "../../../../support/pageObjects/ProductSpecifications";
import { ShoppingCartPage } from "../../../../support/pageObjects/shoppingCartPage";
import { CheckoutConfirmation } from "../../../../support/pageObjects/CheckoutConfirmation";
import { OrderProcessConfirmationPage } from "../../../../support/pageObjects/OrderProcessConfirmationPage";
import { Navbar } from "../../../../support/pageObjects/Navbar";
import { AccountDashboard } from "../../../../support/pageObjects/AccountDashboard";
import { MyWishList } from "../../../../support/pageObjects/MyWishList";
```

## Step Definitions

### Given: User Navigates to ATS HomePage and is logged in

This step initializes the test environment by navigating the user to the ATS HomePage and ensuring the user is logged in.

### When: User Selects an item and adds item to their wishlist

This step selects an item and adds it to the user's wishlist:

1. Searches for an item using the `SearchBar`.
2. Clicks on the first product in the search results using the `SearchResultsPage`.
3. Adds the item to the wishlist if the "Add to WishList" button is displayed using the `ProductDetailsPage`.
4. Retrieves the model number of the item and stores it in a variable for later use.

### When: User Navigates back to their user dashboard and views their wishlist items

This step navigates the user back to their dashboard and views their wishlist items:

1. Clicks the customer menu in the navigation bar using the `Navbar`.
2. Clicks the "My Wishlist" link in the account dashboard using the `AccountDashboard`.
3. Verifies that the model number of the added item is present in the wishlist using the `MyWishList`.

### Then: User is shown their wishlist with the item they added being present

This step is a placeholder for verifying that the added item is present in the wishlist. You can implement this using the `MyWishList` page object to assert that the item is present in the wishlist:

```javascript
// Your code to assert that the added item is present in the wishlist
// Wishlist.verifyItemInWishlist(); // You may need to pass the item details as an argument
```

The `MyWishlist.js` step implementation file tests the wishlist functionality for logged-in users, ensuring that they can add items to their wishlist and view them later.

# SearchforItemLoggedIn.js Step Implementation Documentation

This step implementation file, `SearchforItemLoggedIn.js`, contains the code for the test steps described in the `SearchforItemLoggedIn.feature` file. The test ensures that logged-in users can search for items, add them to their cart, and proceed to checkout.

## Import Statements

The necessary classes and functions are imported at the beginning of the file to be used in the step definitions:

```javascript
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { HomePage } from "../../../../support/pageObjects/HomePage";
import { SearchBar } from "../../../../support/pageObjects/SearchBar";
import { SearchResultsPage } from "../../../../support/pageObjects/SearchResultsPage";
import { ProductDetailsPage } from "../../../../support/pageObjects/ProductDetailsPage";
import { LoginOrRegisterButton } from "../../../../support/pageObjects/LoginOrRegisterButton";
import { LoginPage } from "../../../../support/pageObjects/LoginPage";
import { ProductSpecifications } from "../../../../support/pageObjects/ProductSpecifications";
import { ShoppingCartPage } from "../../../../support/pageObjects/shoppingCartPage";
import { CheckoutConfirmation } from "../../../../support/pageObjects/CheckoutConfirmation";
import { OrderProcessConfirmationPage } from "../../../../support/pageObjects/OrderProcessConfirmationPage";
```

## Step Definitions

### Given: User Searches For {string}

This step initializes the test by searching for an item using the `SearchBar`.

### Given: User Navigates to ATS HomePage and is logged in

This step navigates the user to the ATS HomePage and ensures the user is logged in:

1. Clears cookies.
2. Visits the HomePage using the `HomePage`.
3. Clicks the "Login or Register" button using the `LoginOrRegisterButton`.
4. Logs in using the user's credentials from the `johndoe` fixture and `LoginPage`.

### Given: User Searches For {string}, then selects the first item on search results page

This step searches for an item and selects the first item on the search results page:

1. Searches for the item using the `SearchBar`.
2. Verifies that there is at least one product on the search results page.
3. Retrieves the product title of the first product and stores it in a variable.
4. Clicks on the first product using the `SearchResultsPage`.

### Given: User makes purchase specifications if necessary, adds item to cart and proceeds to checkout

This step handles the purchase specifications and adds the item to the cart:

1. Checks if there are any selections to be made using `ProductSpecifications`.
2. If there are radio buttons, selects the second option.
3. If there is a dropdown menu, selects the first available option.
4. Adds the item to the cart using the `ProductDetailsPage`.
5. Proceeds to checkout using the `ShoppingCartPage`.

### Given: User selects the first product on Search Results Page

This step selects the first product on the search results page:

1. Verifies that there is at least one product on the search results page.
2. Retrieves the product title of the first product and stores it in a variable.
3. Clicks on the first product link using the `SearchResultsPage`.

### Then: Product details Page Corresponding with selected entry is displayed

This step verifies that the selected product's details page is displayed by comparing the product title on the details page with the one stored earlier.

### Then: Checkout confirmation page displays

This step verifies that the checkout confirmation page is displayed:

1. Clicks the "Confirm Order" button using the `CheckoutConfirmation`.
2. Clicks the "Continue" button using the `OrderProcessConfirmationPage`.

The `SearchforItemLoggedIn.js` step implementation file tests the item search, cart, and checkout

# AddressCleanup.js Documentation

The `AddressCleanup.js` file is a support file that provides an `AddressCleanup` class with a `cleanupAddresses` method. This method helps to clean up addresses in the user's address book as part of test setup or teardown.

## Import Statements

The necessary page objects are imported at the beginning of the file to be used in the `cleanupAddresses` method:

```javascript
import { HomePage } from "../pageObjects/HomePage";
import { SearchBar } from "../pageObjects/SearchBar";
import { LoginOrRegisterButton } from "../pageObjects/LoginOrRegisterButton";
import { LoginPage } from "../pageObjects/LoginPage";
import { Navbar } from "../pageObjects/Navbar";
import { AccountDashboard } from "../pageObjects/AccountDashboard";
import { AddressBook } from "../pageObjects/AddressBook";
```

## AddressCleanup Class

The `AddressCleanup` class contains a single static method, `cleanupAddresses`, which is responsible for cleaning up the user's address book.

### cleanupAddresses Method

This method follows these steps:

1. Clears cookies.
2. Visits the HomePage using the `HomePage` page object.
3. Clicks the "Login or Register" button using the `LoginOrRegisterButton` page object.
4. Logs in using the user's credentials from the `johndoe` fixture and `LoginPage` page object.
5. Clicks the customer menu using the `Navbar` page object.
6. Clicks the "Manage Address Book" button using the `AccountDashboard` page object.
7. Clicks all delete buttons in the address book using the `AddressBook` page object.

This method can be used in test scenarios that require a clean state of the address book before or after testing.

Example usage in a test:

```javascript
import { AddressCleanup } from "../../support/cleanup/AddressCleanup";

describe("Address book test", () => {
  beforeEach(() => {
    AddressCleanup.cleanupAddresses();
  });

  it("should add a new address", () => {
    // Your test steps for adding a new address
  });

  afterEach(() => {
    AddressCleanup.cleanupAddresses();
  });
});
```

In this example, the `cleanupAddresses` method is called before each test (in `beforeEach`) and after each test (in `afterEach`) to ensure a clean state of the address book for every test run.

# AccountDashboard.js Documentation

The `AccountDashboard.js` file is a page object that provides methods to interact with the Account Dashboard page in your application. It encapsulates the selectors and actions needed to interact with the page during tests.

## Import Statements

No import statements are needed for this page object as all methods and selectors are self-contained.

## AccountDashboard Class

The `AccountDashboard` class provides methods for interacting with various elements on the Account Dashboard page, such as buttons and alerts.

### Static Properties

The class has several static properties representing the selectors for different elements on the page:

- `alertPath`: The selector for the alert element.
- `editAccountDetailsPath`: The selector for the "Edit account details" button.
- `manageAddressBookPath`: The selector for the "Manage Address Book" button.
- `myWishlistPath`: The selector for the "My wish list" button.

### Methods

The class provides the following methods:

- `getMyWishlist()`: Returns a Cypress chainable object representing the "My wish list" button element.
- `clickMyWishlist()`: Clicks the "My wish list" button.
- `getManageAddressBookButton()`: Returns a Cypress chainable object representing the "Manage Address Book" button element.
- `clickManageAddressBookButton()`: Clicks the "Manage Address Book" button.
- `getAlert()`: Returns a Cypress chainable object representing the alert element.
- `getAlertText()`: Returns the text content of the alert element as a promise.
- `getExpectedAccountUpdateSuccessAlertText()`: Returns the expected success message text after updating the account.
- `getEditAccountDetailsButton()`: Returns a Cypress chainable object representing the "Edit account details" button element.
- `clickEditAccountDetailsButton()`: Clicks the "Edit account details" button.

## Usage in Tests

To use the `AccountDashboard` page object in a test, you can import the class and use its methods to interact with the Account Dashboard page.

Example test:

```javascript
import { AccountDashboard } from "../../support/pageObjects/AccountDashboard";

describe("Account Dashboard Test", () => {
  it("should update account details successfully", () => {
    // Your test steps for logging in and navigating to the Account Dashboard page

    // Click the "Edit account details" button
    AccountDashboard.clickEditAccountDetailsButton();

    // Your test steps for updating account details and submitting the form

    // Assert the success message
    AccountDashboard.getAlertText().then((text) => {
      expect(text).to.equal(
        AccountDashboard.getExpectedAccountUpdateSuccessAlertText()
      );
    });
  });
});
```

In this example, the test uses the `AccountDashboard` page object to click the "Edit account details" button and assert the success message after updating the account.

# AddressBook.js Documentation

The `AddressBook.js` file is a page object that provides methods to interact with the Address Book page in your application. It encapsulates the selectors and actions needed to interact with the page during tests.

## Import Statements

No import statements are needed for this page object as all methods and selectors are self-contained.

## AddressBook Class

The `AddressBook` class provides methods for interacting with various elements on the Address Book page, such as buttons, inputs, and alerts.

### Static Properties

The class has several static properties representing the selectors for different elements on the page:

- `backButtonPath`: The selector for the "Back" button.
- `newAddressButtonPath`: The selector for the "New Address" button.
- `firstNameInputPath`: The selector for the first name input.
- `lastNameInputPath`: The selector for the last name input.
- `companyInputPath`: The selector for the company input.
- `addressInputPath`: The selector for the address input.
- `cityInputPath`: The selector for the city input.
- `zoneInputPath`: The selector for the zone input.
- `zipInputPath`: The selector for the zip input.
- `countryInputPath`: The selector for the country input.
- `continueButtonPath`: The selector for the "Continue" button.
- `alertPath`: The selector for the alert element.
- `deletePath`: The selector for the "Delete" button.
- `addressBox`: The selector for the address box.

### Methods

The class provides the following methods:

- `getLastAddressBoxText()`: Returns the text of the last address box as a promise.
- `getAllAddressBoxesText()`: Returns an array of text content from all address boxes as a promise.
- `clickAllDeleteButtons()`: Clicks all "Delete" buttons on the page.
- `expectedAddressAddedAlertText()`: Returns the expected success message text after adding a new address.
- `getAlertText()`: Returns the text content of the alert element as a promise.
- `getContinueButton()`: Returns a Cypress chainable object representing the "Continue" button element.
- `clickContinueButton()`: Clicks the "Continue" button.
- `getBackButton()`: Returns a Cypress chainable object representing the "Back" button element.
- `clickBackButton()`: Clicks the "Back" button.
- `getNewAddressButton()`: Returns a Cypress chainable object representing the "New Address" button element.
- `clickNewAddressButton()`: Clicks the "New Address" button.
- `getFirstNameInput()`: Returns a Cypress chainable object representing the first name input element.
- `enterNewFirstName(firstName)`: Clears and types the provided `firstName` into the first name input.
- `getLastNameInput()`: Returns a Cypress chainable object representing the last name input element.
- `enterNewLastName(lastName)`: Clears and types the provided `lastName` into the last name input.
- `getCompanyInput()`: Returns a Cypress chainable object representing the company input element.
- `enterNewCompany(company)`: Clears and types the provided `company` into the company input.
- `getAddressInput()`: Returns a Cypress chainable object representing the address input element.
- `enterNewAddress(address)`: Clears and types the provided `address` into the address input.
- `getCityInput()`: Returns a Cypress chainable object representing the city input element.
- `enterNewCity(city)`: Clears and types the provided `city` into the city input.
- `getZoneInput()`: Returns a Cypress chainable object representing the zone input element.
- `selectZone(zone)`: Selects the provided `zone` from the zone input dropdown.
- `getZipInput()`: Returns a Cypress chainable object representing the zip input element.
- `enterNewZip(zip)`: Clears and types the provided `zip` into the zip input.
- `getCountryInput()`: Returns a Cypress chainable object representing the country input element.
- `selectCountry(country)`: Selects the provided `country` from the country input dropdown.

## Usage

To use the `AddressBook` class in your tests, import the class and create a new instance or use the static methods directly.

```javascript
import { AddressBook } from "../pageObjects/AddressBook";

// Example usage:
AddressBook.clickNewAddressButton();
AddressBook.enterNewFirstName("John");
AddressBook.enterNewLastName("Doe");
AddressBook.enterNewAddress("123 Main St");
AddressBook.enterNewCity("New York");
AddressBook.selectZone("New York");
AddressBook.enterNewZip("10001");
AddressBook.selectCountry("United States");
AddressBook.clickContinueButton();
```

This `AddressBook.js` page object makes it easy to interact with the Address Book page, abstracting away the complexities of selectors and actions, so you can focus on writing clean, maintainable test code.

The `CheckoutConfirmation.js` file is a page object representing the Checkout Confirmation page. It provides an abstraction for interacting with the elements on this page, making it easier to write and maintain tests.

## Methods

The `CheckoutConfirmation` class contains the following methods:

- `getConfirmOrderButton()`: Returns a Cypress chainable object representing the "Confirm Order" button element.
- `clickConfirmOrderButton()`: Clicks the "Confirm Order" button to proceed with the order.

## Usage

To use the `CheckoutConfirmation` class in your tests, import the class and create a new instance or use the static methods directly.

```javascript
import { CheckoutConfirmation } from "../pageObjects/CheckoutConfirmation";

// Example usage:
CheckoutConfirmation.clickConfirmOrderButton();
```

Using the `CheckoutConfirmation.js` page object makes it easy to interact with the Checkout Confirmation page, abstracting away the complexities of selectors and actions, so you can focus on writing clean, maintainable test code.

The `Dropdown.js` file is a utility class representing a generic dropdown menu on a webpage. It provides an abstraction for interacting with dropdown elements, making it easier to write and maintain tests involving dropdown menus.

## Constructor

The `Dropdown` class constructor takes a single argument:

- `dropdownMenuPath` (String): The CSS selector for the dropdown menu.

## Methods

The `Dropdown` class contains the following methods:

- `getDropdownMenu()`: Returns a Cypress chainable object representing the dropdown menu element.
- `getDropdownMenuOptions()`: Returns a Cypress chainable object representing the options within the dropdown menu.
- `getNumberOfDropdownMenuOptions()`: Returns the number of options in the dropdown menu.
- `getNthDropdownMenuOption(n)`: Returns a Cypress chainable object representing the nth option within the dropdown menu.
- `selectNthDropdownMenuOption(n)`: Selects the nth option within the dropdown menu.

## Usage

To use the `Dropdown` class in your tests, import the class and create a new instance with the appropriate dropdown menu selector.

```javascript
import { Dropdown } from "../utils/Dropdown";

// Create a new instance with the appropriate dropdown menu selector
const exampleDropdown = new Dropdown(".example-dropdown");

// Example usage:
exampleDropdown.selectNthDropdownMenuOption(2);
```

Using the `Dropdown.js` utility class makes it easy to interact with dropdown menus on webpages, abstracting away the complexities of selectors and actions, so you can focus on writing clean, maintainable test code.

The `EditAccountDetailsPage.js` file is a Page Object representing the Edit Account Details page on a website. It provides an abstraction for interacting with the Edit Account Details page elements, making it easier to write and maintain tests involving this page.

## Methods

The `EditAccountDetailsPage` class contains the following methods for interacting with the form elements on the page:

- `getFirstNameInputValue()`: Returns the value of the first name input field.
- `getLastNameInputValue()`: Returns the value of the last name input field.
- `getEmailInputValue()`: Returns the value of the email input field.
- `getTelephoneInputValue()`: Returns the value of the telephone input field.
- `getFaxInputValue()`: Returns the value of the fax input field.
- `getContinueButton()`: Returns a Cypress chainable object representing the Continue button.
- `clickContinueButton()`: Clicks the Continue button.
- `getFirstNameInput()`: Returns a Cypress chainable object representing the first name input field.
- `getLastNameInput()`: Returns a Cypress chainable object representing the last name input field.
- `getEmailInput()`: Returns a Cypress chainable object representing the email input field.
- `getTelephoneInput()`: Returns a Cypress chainable object representing the telephone input field.
- `getFaxInput()`: Returns a Cypress chainable object representing the fax input field.
- `clearFirstNameInput()`: Clears the first name input field.
- `clearLastNameInput()`: Clears the last name input field.
- `clearEmailInput()`: Clears the email input field.
- `clearTelephoneInput()`: Clears the telephone input field.
- `clearFaxInput()`: Clears the fax input field.
- `enterTextToFirstNameInput(input)`: Enters text into the first name input field.
- `enterTextToLastNameInput(input)`: Enters text into the last name input field.
- `enterTextToEmailInput(input)`: Enters text into the email input field.
- `enterTextToTelephoneInput(input)`: Enters text into the telephone input field.
- `enterTextToFaxInput(input)`: Enters text into the fax input field.
- `replaceFirstName(newFirstName)`: Replaces the first name input field value with a new value.
- `replaceLastName(newLastName)`: Replaces the last name input field value with a new value.
- `replaceEmail(newEmail)`: Replaces the email input field value with a new value.
- `replaceTelephone(newTelephone)`: Replaces the telephone input field value with a new value.
- `replaceFax(newFaxNumber)`: Replaces the fax input field value with a new value.

## Usage

To use the `EditAccountDetailsPage` class in your tests, import the class and call its methods directly.

```javascript
import { EditAccountDetailsPage } from "../pageObjects/EditAccountDetailsPage";

// Example usage:
EditAccountDetailsPage.replaceFirstName("NewFirstName");
EditAccountDetailsPage.clickContinueButton();
```

Using the `EditAccountDetailsPage` class makes it easy to interact with the Edit Account Details page elements, abstracting away the complexities of selectors and actions, so you can focus on writing clean, maintainable test code.

The `Homepage.js` file is a Page Object representing the home page of a website, specifically, the "https://automationteststore.com/" URL. It provides an abstraction for interacting with the home page, making it easier to write and maintain tests involving this page.

## Methods

The `HomePage` class contains the following method for interacting with the home page:

- `visitHomePage()`: Navigates to the home page URL, which is defined as a static property `homePageUrl`.

## Usage

To use the `HomePage` class in your tests, import the class and call its methods directly.

```javascript
import { HomePage } from "../pageObjects/HomePage";

// Example usage:
HomePage.visitHomePage();
```

Using the `HomePage` class makes it easy to interact with the home page elements and perform actions like navigating to the home page. This abstraction allows you to focus on writing clean, maintainable test code, without worrying about the complexities of selectors and actions.

The `LoginOrRegisterButton.js` file is a Page Object representing the "Login or Register" button commonly found on websites. It provides an abstraction for interacting with this button, making it easier to write and maintain tests involving this element.

## Methods

The `LoginOrRegisterButton` class contains the following method for interacting with the "Login or Register" button:

- `clickButton()`: Clicks on the "Login or Register" button, which is identified by the selector `#customernav a`.

## Usage

To use the `LoginOrRegisterButton` class in your tests, import the class and call its method directly.

```javascript
import { LoginOrRegisterButton } from "../pageObjects/LoginOrRegisterButton";

// Example usage:
LoginOrRegisterButton.clickButton();
```

Using the `LoginOrRegisterButton` class makes it easy to interact with the "Login or Register" button on a website. This abstraction allows you to focus on writing clean, maintainable test code, without worrying about the complexities of selectors and actions.

The `LoginPage.js` file is a Page Object representing the Login page of a website. It provides an abstraction for interacting with elements related to user authentication, making it easier to write and maintain tests involving this functionality.

## Methods

The `LoginPage` class contains the following methods for interacting with the login page:

- `getLoginInput()`: Returns the username input field, identified by the selector `#loginFrm_loginname`.
- `getPasswordInput()`: Returns the password input field, identified by the selector `#loginFrm_password`.
- `getLoginButton()`: Returns the login button, identified by the selector `button[title="Login"]`.
- `getForgottenPasswordLink()`: Returns the "Forgot Password" link, identified by the selector `a[href*="forgotten/password"]`.
- `getForgottenLoginLink()`: Returns the "Forgot Login" link, identified by the selector `a[href*="forgotten/loginname"]`.
- `login(username, password)`: Types the given `username` and `password` into their respective input fields and clicks the login button.

## Usage

To use the `LoginPage` class in your tests, import the class and call its methods directly.

```javascript
import { LoginPage } from "../pageObjects/LoginPage";

// Example usage:
LoginPage.login("username", "password");
```

Using the `LoginPage` class makes it easy to interact with the login page of a website. This abstraction allows you to focus on writing clean, maintainable test code, without worrying about the complexities of selectors and actions.

The `MyWishList.js` file is a Page Object representing the "My Wish List" page of a website. It provides an abstraction for interacting with elements related to a user's wish list, making it easier to write and maintain tests involving this functionality.

## Methods

The `MyWishList` class contains the following methods for interacting with the "My Wish List" page:

- `findGivenAddedToWishListTableRow(name)`: Returns a Promise that resolves with the row index containing the given `name` in the "Added to Wishlist" column.
- `findGivenUnitPriceTableRow(name)`: Returns a Promise that resolves with the row index containing the given `name` in the "Unit Price" column.
- `findGivenModelTableRow(name)`: Returns a Promise that resolves with the row index containing the given `name` in the "Model" column.
- `findGivenNameTableRow(name)`: Returns a Promise that resolves with the row index containing the given `name` in the "Name" column.

There are also various methods to get specific table cells or all table cells in a specific column, such as:

- `getNthTableNameCell(n)`: Returns the nth "Name" cell in the table.
- `getAllTableNameCells()`: Returns all "Name" cells in the table.
- `getNthTableActionsPriceCell(n)`: Returns the nth "Actions" cell in the table.
- `getAllTableActionsCells()`: Returns all "Actions" cells in the table.

Other methods are provided for getting specific table cells for other columns, such as "Image", "Model", "Unit Price", and "Added to Wishlist".

The `createPathToAccessGivenTableRowAndColumn(row, column)` and `createPathToAccessGivenTableColumn(column)` methods are utility methods for generating the appropriate CSS selectors for accessing table elements.

## Usage

To use the `MyWishList` class in your tests, import the class and call its methods directly.

```javascript
import { MyWishList } from "../pageObjects/MyWishList";

// Example usage:
MyWishList.findGivenNameTableRow("Product Name").then((rowIndex) => {
  console.log("Product found in row:", rowIndex);
});
```

Using the `MyWishList` class makes it easy to interact with the "My Wish List" page of a website. This abstraction allows you to focus on writing clean, maintainable test code, without worrying about the complexities of selectors and actions.

The `Navbar.js` file is a Page Object representing the website's navigation bar. It provides an abstraction for interacting with elements related to the navigation bar, making it easier to write and maintain tests involving this functionality.

## Methods

The `Navbar` class contains the following methods for interacting with the navigation bar:

- `getCustomerMenu()`: Returns the customer menu element in the navigation bar.
- `clickCustomerMenu()`: Clicks the customer menu element in the navigation bar.

## Usage

To use the `Navbar` class in your tests, import the class and call its methods directly.

```javascript
import { Navbar } from "../pageObjects/Navbar";

// Example usage:
Navbar.clickCustomerMenu();
```

Using the `Navbar` class makes it easy to interact with the navigation bar of a website. This abstraction allows you to focus on writing clean, maintainable test code, without worrying about the complexities of selectors and actions.

The `OrderProcessConfirmationPage.js` file is a Page Object representing the order process confirmation page of a website. It provides an abstraction for interacting with elements related to the confirmation page, making it easier to write and maintain tests involving this functionality.

## Methods

The `OrderProcessConfirmationPage` class contains the following methods for interacting with the order process confirmation page:

- `getContinueButton()`: Returns the continue button element on the confirmation page.
- `clickContinueButton()`: Clicks the continue button element on the confirmation page.

## Usage

To use the `OrderProcessConfirmationPage` class in your tests, import the class and call its methods directly.

```javascript
import { OrderProcessConfirmationPage } from "../pageObjects/OrderProcessConfirmationPage";

// Example usage:
OrderProcessConfirmationPage.clickContinueButton();
```

Using the `OrderProcessConfirmationPage` class makes it easy to interact with the order process confirmation page of a website. This abstraction allows you to focus on writing clean, maintainable test code, without worrying about the complexities of selectors and actions.

The `ProductDetailsPage.js` file is a Page Object representing the product details page of a website. It provides an abstraction for interacting with elements related to the product details page, making it easier to write and maintain tests involving this functionality.

## Methods

The `ProductDetailsPage` class contains the following methods for interacting with the product details page:

- `getProductInfo()`: Returns the product information elements.
- `getModelNumber()`: Returns the product's model number.
- `isAddToWishListButtonDisplayed()`: Returns a boolean indicating if the 'Add to Wishlist' button is displayed.
- `isRemoveFromWishListButtonDisplayed()`: Returns a boolean indicating if the 'Remove from Wishlist' button is displayed.
- `getRemoveFromWishList()`: Returns the 'Remove from Wishlist' button element.
- `itemIsOutOfStock()`: Returns a boolean indicating if the item is out of stock.
- `getProductName()`: Returns the product's name element.
- `getAddToWishList()`: Returns the 'Add to Wishlist' button element.
- `clickAddToWishListButton()`: Clicks the 'Add to Wishlist' button element.
- `clickRemoveFromWishListButton()`: Clicks the 'Remove from Wishlist' button element.
- `getProductPrice()`: Returns the product's price element.
- `getAddToCartButton()`: Returns the 'Add to Cart' button element.
- `clickAddToCartButton()`: Clicks the 'Add to Cart' button element.
- `getProductDescription()`: Returns the product's description element.

## Usage

To use the `ProductDetailsPage` class in your tests, import the class and call its methods directly.

```javascript
import { ProductDetailsPage } from "../support/pageObjects/ProductDetailsPage";

// Example usage:
ProductDetailsPage.clickAddToWishListButton();
```

Using the `ProductDetailsPage` class makes it easy to interact with the product details page of a website. This abstraction allows you to focus on writing clean, maintainable test code, without worrying about the complexities of selectors and actions.

The `ProductSpecifications.js` file is a Page Object representing the product specifications section of a product details page on a website. It provides an abstraction for interacting with elements related to product specifications, making it easier to write and maintain tests involving this functionality.

## Methods

The `ProductSpecifications` class contains the following methods for interacting with the product specifications section:

- `hasSelections()`: Returns a boolean indicating if the product has specifications selections.
- `hasRadioButtons()`: Returns a boolean indicating if the product has radio button selections.
- `getRadioButtons()`: Returns the radio button elements.
- `getNthRadioButton(n)`: Returns the `nth` radio button element.
- `getNthRadioButtonText(n)`: Returns the text of the `nth` radio button label.
- `hasDropdownMenu()`: Returns a boolean indicating if the product has a dropdown menu for specifications.
- `getDropdownMenu()`: Returns the dropdown menu element.
- `getDropdownMenuOptions()`: Returns the dropdown menu option elements.
- `getNumberOfDropdownMenuOptions()`: Returns the number of dropdown menu options.
- `getNthDropdownMenuOption(n)`: Returns the `nth` dropdown menu option element.
- `getNthDropdownMenuOptionText(n)`: Returns the text of the `nth` dropdown menu option.
- `selectNthDropdownMenuOption(n)`: Selects the `nth` dropdown menu option.
- `selectFirstAvailableDropdownOption()`: Selects the first available (in-stock) dropdown menu option.
- `containsOutOfStock(optionText)`: Returns a boolean indicating if the option text contains "Out of Stock".
- `removeNbsp(string)`: Removes the non-breaking space characters (`&nbsp;`) from the given string.

## Usage

To use the `ProductSpecifications` class in your tests, import the class and call its methods directly.

```javascript
import { ProductSpecifications } from "../support/pageObjects/ProductSpecifications";

// Example usage:
ProductSpecifications.selectFirstAvailableDropdownOption();
```

Using the `ProductSpecifications` class makes it easy to interact with the product specifications section of a product details page. This abstraction allows you to focus on writing clean, maintainable test code, without worrying about the complexities of selectors and actions.

The `RadioButtonSelectionSet.js` file is a Page Object representing a set of radio button selections within a web page. It provides an abstraction for interacting with elements related to radio button sets, making it easier to write and maintain tests involving this functionality.

## Methods

The `RadioButtonSelectionSet` class contains the following methods for interacting with the radio button selection sets:

- `getRadioButtonsGroup()`: Returns the radio buttons group element.
- `hasRadioButtons()`: Returns a boolean indicating if the selection set contains radio buttons.

## Usage

To use the `RadioButtonSelectionSet` class in your tests, import the class and call its methods directly.

```javascript
import { RadioButtonSelectionSet } from "../support/pageObjects/RadioButtonSelectionSet";

// Example usage:
if (RadioButtonSelectionSet.hasRadioButtons()) {
  RadioButtonSelectionSet.getRadioButtonsGroup().click();
}
```

Using the `RadioButtonSelectionSet` class makes it easy to interact with radio button selection sets on a web page. This abstraction allows you to focus on writing clean, maintainable test code, without worrying about the complexities of selectors and actions.

The `SearchBar.js` file is a Page Object representing the search bar functionality within a web page. It provides an abstraction for interacting with elements related to the search bar, making it easier to write and maintain tests involving this functionality.

## Methods

The `SearchBar` class contains the following methods for interacting with the search bar:

- `getSearchInput()`: Returns the search input element.
- `getSearchButton()`: Returns the search button element.
- `searchForItem(item)`: Types the provided `item` into the search input field and clicks the search button.

## Usage

To use the `SearchBar` class in your tests, import the class and call its methods directly.

```javascript
import { SearchBar } from "../support/pageObjects/SearchBar";

// Example usage:
SearchBar.searchForItem("example item");
```

Using the `SearchBar` class makes it easy to interact with the search bar on a web page. This abstraction allows you to focus on writing clean, maintainable test code, without worrying about the complexities of selectors and actions.

The `ShoppingCartPage.js` file is a Page Object representing the shopping cart page within an Automation Test Store web page. It provides an abstraction for interacting with elements related to the shopping cart, making it easier to write and maintain tests involving shopping cart functionality.

## Methods

The `ShoppingCartPage` class contains the following methods for interacting with the shopping cart page:

- `getCheckoutPath()`: Returns the "Checkout" button element on the shopping cart page.
- `clickCheckoutPath()`: Clicks on the "Checkout" button element on the shopping cart page.

## Usage

To use the `ShoppingCartPage` class in your tests, import the class and call its methods directly.

```javascript
import { ShoppingCartPage } from "../support/pageObjects/ShoppingCartPage";

// Example usage:
ShoppingCartPage.clickCheckoutPath();
```

Using the `ShoppingCartPage` class makes it easy to interact with the shopping cart page on a web page. This abstraction allows you to focus on writing clean, maintainable test code, without worrying about the complexities of selectors and actions.
