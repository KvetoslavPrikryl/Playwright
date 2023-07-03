import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.onlio.com/');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.goto('https://www.onlio.com/kariera');
  await page.locator('#navMenu').getByRole('menuitem', { name: 'Kariéra' }).click();
  await page.getByLabel('Jméno a příjmení').click();
  await page.getByLabel('Jméno a příjmení').fill('Květoslav Přikryl');
  await page.getByLabel('Společnost/organizace').click();
  await page.getByLabel('Společnost/organizace').fill('Continental automotive');
  await page.getByLabel('Pracovní pozice').click();
  await page.getByLabel('Pracovní pozice').fill('Denní technik');
  await page.locator('#input-phone').click();
  await page.locator('#input-phone').fill('704853493');
  await page.locator('#input-email').click();
  await page.locator('#input-email').fill('kvetoslav.prikryl1991@gmail.com');
  await page.getByRole('combobox', { name: 'Mám zájem o' }).selectOption('2');
  await page.locator('#input-gdpr').check();
  
});