import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/Login.page.js';
import { CheckboxPage } from '../pages/checkbox.page.js';


type HerokuFixtures = {
    loginPage: LoginPage;
    checkboxPage: CheckboxPage;
};

export const test = base.extend<HerokuFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    checkboxPage: async ({ page }, use) => {
        const checkboxPage = new CheckboxPage(page);
        await use(checkboxPage);
    },
    createUser: {}
});

export { expect } from '@playwright/test';