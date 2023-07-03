
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  const TODO_ITEMS = ["Kontaktujte nás"]
  await page.goto('https://www.onlio.com/');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('#navMenu').getByRole('menuitem', { name: 'Kontakt' }).click();
  await expect(page.getByRole('heading', { name: 'Kontaktujte nás' })).toHaveText([TODO_ITEMS[0]]);
  await page.getByRole('contentinfo').getByRole('menuitem', { name: 'Kontakt' }).click();
  await expect(page.getByRole('heading', { name: 'Kontaktujte nás' })).toHaveText([TODO_ITEMS[0]]);
});