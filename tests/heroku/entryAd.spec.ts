import { expect, test } from '@playwright/test';

test('handel random advertisement popup', async ({ page }) => {
    await page.goto('/entry_ad');

    await page.addLocatorHandler(
        page.getByRole('heading', { name: 'THIS IS A MODAL WINDOWS' }),
        async () => {
            await page.getByText('Close').click();
            
        });

        await expect(page.getByRole('link', { name: 'click here' })).toBeVisible();
    await page.getByRole('link', { name: 'click here' }).click();
    await expect(page.getByRole('heading', { name: 'This is a modal windows' })).toBeVisible();

});

