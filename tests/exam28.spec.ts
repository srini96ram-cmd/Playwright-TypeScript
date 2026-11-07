import {test,expect} from '@playwright/test';
test('locate elements',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/');
await page.locator('[placeholder^="Enter"]').first().fill('sri'); //starts with
await page.locator('[placeholder$="EMail"]').fill('sri@gmail.com'); //ends with
await page.locator('[id*="phone"]').type('1234567');//contains with
await page.waitForTimeout(2000);
});