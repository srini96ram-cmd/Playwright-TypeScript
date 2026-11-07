
import { test, expect } from '@playwright/test';

test('Select last dropdown option', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dropdown');

  const dropdown = page.locator('#dropdown');

  // Count total options
  const count = await dropdown.locator('option').count();

  console.log('Total options:', count);

  // Select last option
  await dropdown.selectOption({ index: count - 1 });

  // Print selected value
  const selectedValue = await dropdown.inputValue();

  console.log('Selected value:', selectedValue);
});