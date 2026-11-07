import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world.js';

Given('I am on the login page', async function (this: CustomWorld) {
  await this.page.goto('https://your-application-url.com/login');
});

When(
  'I enter username {string} and password {string}',
  async function (this: CustomWorld, username: string, password: string) {
    await this.loginPage.enterUsername(username);
    await this.loginPage.enterPassword(password);
  }
);

When('I click the login button', async function (this: CustomWorld) {
  await this.loginPage.clickLogin();
});

Then('I should navigate to the dashboard', async function (this: CustomWorld) {
  await expect(this.page).toHaveURL(/dashboard/);
});