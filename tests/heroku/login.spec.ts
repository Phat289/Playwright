import { test, expect } from './fixtures/heroku.fixture.ts';
// Data Driven Test for Login Functionality
const dataSet = [{
    username: "tomsmith",
    password: "SuperSecretPassword!",
    expectedUrl: "https://the-internet.herokuapp.com/secure",
    flashMessage: "You logged into a secure area!"
}];

dataSet.forEach(data => {
    test(`login with username: ${data.username} and password: ${data.password} then flash message ${data.flashMessage} visibile`,
        {tag: "@smoke"},
        async ({ loginPage,page }) => {
         
            await loginPage.goto();
            await loginPage.submitForm(data.username, data.password);
            expect(page.url()).toBe(data.expectedUrl);
            await expect(loginPage.getFlashMessage(data.flashMessage)).toBeVisible();
    });
});

Ha Do Jul 5, 3:57 PM
import { test, expect } from './fixtures/heroku.fixture.ts';
// Data Driven Test for Login Functionality
const dataSet = [{
    username: "tomsmith",
    password: "SuperSecretPassword!",
    expectedUrl: "https://the-internet.herokuapp.com/secure",
    flashMessage: "You logged into a secure area!"
}];

dataSet.forEach(data => {
    test(`login with username: ${data.username} and password: ${data.password} then flash message ${data.flashMessage} visibile`,
        {tag: "@smoke"},
        async ({ loginPage,page }) => {
         
            await loginPage.goto();
            await loginPage.submitForm(data.username, data.password);
            expect(page.url()).toBe(data.expectedUrl);
            await expect(loginPage.getFlashMessage(data.flashMessage)).toBeVisible();
    });
});