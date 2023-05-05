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
