import { test, expect } from '@playwright/test';

test('abled select option 1', async ({ page }) => {
    await page.goto("/dropdown");
    await page.locator("#dropdown").selectOption({label: "Option 1"});
    await expect(page.locator("#dropdown")).toHaveValue("1");
});

test('abled select multiple options', async ({ page }) => {
    await page.goto("https://output.jsbin.com/osebed/2");
    await page.locator("#fruits").selectOption(["apple", "orange"]);
    await expect(page.locator("#fruits"))
    .toHaveValues(["apple", "orange"]);
});