const { test, expect } = require('@playwright/test');

test("My first test", async ({page}) => {
    await page.goto("https://www.google.cz");
    await expect(page).toHaveTitle("Google");
})