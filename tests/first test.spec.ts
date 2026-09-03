
import { test, expect } from '@playwright/test';
test.describe('first test', () => {


    test('first test', async ({ page }) => {
    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google')


    })

})