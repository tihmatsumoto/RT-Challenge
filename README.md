# RT-Challenge

Part 1 and 2 are available with all code for Automated Testing task using **Playwright** framework, **Typescript** and **Page Object Model (POM)**.

I decided to use POM to better organize and maintainance test scripts, which is something that needs to be considered for a growing framework and its tests. These decision improves separation of concerns, allowing us to maintain logic and interactions specific to some pages. If there are any UI changes, we only have to update locator in order to resolve flakiness from changes.

Right away, I can point some improvements to extend reusability, for example, implementing a generic method in order in which you can pass name in string format to click a specific item in menu, submenu and also, to validate products. I also decided to create a BasePage and just extend HomePage to use its WaitForPage behavior for opening a new tab. I assume this is a behavior that will be used frequently.

For API testing, I decided to go with the easiest possible structure, also using Playwright. It can be used multiple times, if team provides specific data through a file and can be used to validate different behaviors. This could be improved to accept only specific types created to avoid data mistakes/errors.

### Installation

If not available, install **npm**:
```
npm install npm@latest -g
```
Clone this repository:
```
git clone https://github.com/tihmatsumoto/RT-Challenge
```
Install dependencies and project:
```
npm install
```
### Running tests

To run UI tests, use this:
```
npm run test:ui
```
To run API tests, use this:
```
npm run test:api
```
To run all tests, use this:
```
npm run test
```

### Report

Playwright automatically creates a report, which can be checked here:

```
npm run report
```