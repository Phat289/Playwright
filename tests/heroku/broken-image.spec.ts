import {test, expect} from '@playwright/test';
import { log } from 'console';

test('verify broken image', async ({page}) => {
    await page.goto('/broken_image');
    
    // Check if the image is broken
    const image = page.locator('img');
    const allImages = await image.all();
    for (const img of allImages) {
        const imgSrc = await image.getAttribute('src');
        expect(imgSrc?.lenghth).toBeGreaterThan(1);
        const res = await page.request.get("http://the-internet.herokuapp.com/"+imgSrc);
        console.log("Image src: ", imgSrc);
        expect(res.status()).toBe(200); // Expect the image to be broken (404)
    }

});