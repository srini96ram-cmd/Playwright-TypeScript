import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test('has title', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.navigate('https://adactinhotelapp.com/index.php');
  await loginPage.login('admin1','Adjfsuf');

});


