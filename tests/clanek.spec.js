import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  const TODO_ITEMS = ["Filozofie platformy"]
  await page.goto('https://www.onlio.com/');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('#navMenu').getByRole('menuitem', { name: 'Novinky' }).click();
  await page.getByRole('link', { name: 'Jsme partnerem automatizační platformy Integromat' }).click();
  console.log(await page.locator('//*[@id="tsf"]/div[2]/div[1]/div[1]/div/div[2]/input').textContent())
});
