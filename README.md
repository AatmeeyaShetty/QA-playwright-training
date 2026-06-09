# Title : Web Automation testing framework using Playwright,Typescript and Page Object Model
# Overview
This project automates the saucedemo website(https://www.saucedemo.com/ ) using playwright with typescript.
The test covers the following functionalities:
1.Login Functionality
2.Product Validation
3.Cart Functionality
4.Checkout Functionality

# Tech Stack Used
1.Playwright
2.Typescript
3.Node.js
Page Object Model

# Folder Structure
```
| 
├── tests/ 
│   ├── login.spec.ts 
│   ├── products.spec.ts 
│   ├── cart.spec.ts 
│   └── checkout.spec.ts 
| 
├── pages/ 
│   ├── LoginPage.ts 
│   ├── ProductsPage.ts 
│   ├── CartPage.ts 
│   └── CheckoutPage.ts 
| 
├── test-data/ 
│   ├── users.ts 
│   └── products.ts 
| 
├── utils/ 
│   └── testHelpers.ts 
| 
├── playwright.config.ts 
├── package.json 
└── README.md 
```
# Requirements
Ensure you have the following installed on your device:
System Requirements:
1. Node.js:Version 18.0.0 or higher.
2. VS Code: Latest Version.
Browser Requirements:
1. CHromium
2. Firefox
3. Webkit
Command to install - npx playwright install

# Setup Instructions
1.Install Node.js (https://nodejs.org/en/download)
 To verify the installation :
 ```bash
 node -v
 npm -v
```
2.Clone or download the repository 
```bash
 command: git clone <github.com/AatmeeyaShetty/9th_June> cd <project-folder>
```
3.Install the requirements/dependencies listed in package.json
```bash
 npm install
```
4.Install playwright Browsers
```bash
 npm playwright install // downloads the required browser - chromium,firefox and Webkit
```

# Execution Steps and Commands

#  To Run all tests 
```bash
npx playwright test
```
# To Run tests in headed mode 
```bash
npx playwright test --headed
```
 
# To Run tests in UI mode 
```bash
npx playwright test --ui
```
 
# To Show HTML report 
```bash
npx playwright show-report
```
 
# To Run only smoke tests 
```bash
npx playwright test --grep @smoke
```
 
# TO Run only negative tests 
```bash
npx playwright test --grep @negative
```
 
# Run specific test file 
 For Login
 ```bash
npx playwright test tests/login.spec.ts
``` 
 For Cart
 ```bash
npx playwright test tests/cart.spec.ts
```
For Products
```bash
npx playwright test tests/product.spec.ts
```
For Checkout
```bash
npx playwright test tests/checkout.spec.ts
```









