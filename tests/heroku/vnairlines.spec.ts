import { test, expect } from '@playwright/test';

test.use({baseURL: "https://www.vietnamairlines.com"});

test('Verify able to departure date as Today', async ({ page }) => {
        const today = new Date();
        // using toISOString() to get the current date in DD-MM-YYYY format
        const currentDate = today.getDate().toString().padStart(2, '0'); // Ensure two digits
        const currentMonth = (today.getMonth() + 1).toString().padStart(2, '0'); // getMonth() returns 0-11, so we add 1 and ensure two digits
        const currentYear = today.getFullYear();
        console.log(`Current Month: ${currentMonth}`);
        console.log(`Current Date: ${today.getDate()}`);
        
        await page.goto('/vn/vi/home');
        await page.getByRole('button', { name: 'Đồng ý' }).click();
        await page.locator('#city-to-roundtrip').click();
        await page.getByRole('link', { name: 'Hà Nội (HAN), Việt Nam' }).click();
        await page.getByRole('table')
            .nth(0) // 0: current month, 1: next month
            .getByRole('link', { name: currentDate }) // Select the current date
            .click()
        
        const departureDate = await page.getByRole('textbox', { name: "Ngày đi"}).inputValue();
        await expect(departureDate).toBe(`${currentDate}/${currentMonth}/${currentYear}`);
    });