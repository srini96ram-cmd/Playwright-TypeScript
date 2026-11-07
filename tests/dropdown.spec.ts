
import { test, expect } from '@playwright/test';

test('Dropdown handling', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/dropdown');

  const dropdown = page.locator('#dropdown');

  // Select by value
  await dropdown.selectOption({ value: '1' });

  // Select by visible text
  await dropdown.selectOption({ label: 'Option 2' });

  // Select by index
  await dropdown.selectOption({ index: 1 });

  // Count dropdown options
  const count = await dropdown.locator('option').count();
  console.log('Total options:', count);

  // Print all dropdown options
  const options = await dropdown.locator('option').allTextContents();
  console.log(options);

  // Get selected value
  const selectedValue = await dropdown.inputValue();
  console.log('Selected value:', selectedValue);

  // Verify selected value
  await expect(dropdown).toHaveValue('1');

  
});