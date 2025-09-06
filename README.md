# Playwright Test Automation Project

## Overview
This repository contains automated tests for web applications using [Playwright](https://playwright.dev/). The tests are organized by feature and API area, following best practices for maintainability and scalability.

## Project Structure
```
pw2505/
├── tests/
│   ├── booker/
│   │   ├── auth.spec.ts
│   │   ├── createbooking.spec.ts
│   │   ├── getbooking.spec.ts
│   ├── flight/
│   │   └── booking.spec.ts
│   ├── heroku/
│   │   └── checkbox.spec.ts
├── fixtures/
│   ├── auth.fixture.ts
│   └── heroku.fixture.ts
├── package.json
├── playwright.config.ts
└── README.md
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. Clone this repository:
   ```sh
   git clone <repo-url>
   cd pw2505
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Running Tests
To run all tests:
```sh
npx playwright test
```
To run a specific test file:
```sh
npx playwright test tests/heroku/checkbox.spec.ts
```

### Project Highlights
- **API Testing:** Includes tests for RESTful Booker API endpoints (auth, booking CRUD).
- **UI Testing:** Includes tests for web UI features (checkboxes, date pickers, etc.).
- **Fixtures:** Custom fixtures for authentication and page objects to promote code reuse.
- **Schema Validation:** Uses [zod](https://github.com/colinhacks/zod) for API response validation.

### Useful Commands
- Run tests in headed mode:
  ```sh
  npx playwright test --headed
  ```
- Generate HTML report:
  ```sh
  npx playwright show-report
  ```

## Contributing
Feel free to open issues or submit pull requests for improvements and new features.

## License
This project is licensed under the MIT License.
