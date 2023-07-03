import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  const TODO_ITEMS = ["Globální intranet"]
  await page.goto('https://www.onlio.com/');
  
  await page.locator('#navMenu').getByRole('menuitem', { name: 'Reference' }).click();
  const text = await page.locator("#referenceBTypehome-credit-1")
  console.log(text)
  expect(text.includes("Globální intranet"))
});