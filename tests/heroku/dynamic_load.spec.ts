import {test, expect} from '@playwright/test';

test('verify progress bar', async ({page}) => {
    await page.goto('/dynamic_loading/1'); // Navigate to the dynamic loading page

    // Click the "Start" button to begin loading
    await page
        .getByRole('button', { name: 'Start' })
        .click();

    await expect(page.getByRole('heading', {name:'Hello World!'}))
    .toBeVisible({timeout: 10000}); 
})

test('verify hello world display after click start', async ({page}) => {
    await page.goto('http://the-internet.herokuapp.com/dynamic_loading/1'); 
    await page.getByRole('button', { name: 'Start' }).click();

    await expect(page.getByText('Hello World!')).toBeVisible({ timeout: 10000 });
});