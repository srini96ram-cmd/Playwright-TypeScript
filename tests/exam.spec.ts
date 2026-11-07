//launch saucedemo and locate username,pwd,loginusing basic selectors.
//basic selectors means using id,name,tag name,class

import {test,expect} from '@playwright/test';

test('launch saucedemo',async({page})=>{

//using id value - always need to add # before using id attribute value.
//id="user-name" using user-name attribute value.
    await page.goto('https://www.saucedemo.com/');
        await expect(page).toHaveTitle('Swag Labs');

    const name=page.locator('#user-name').nth(0);
    await name.fill('standard_user');
   
   //id="password"
    const pwd=page.locator('#password').nth(0);
    await pwd.fill('secret_sauce');

    //id="login-button" - button so click should be used
    const login=page.locator('#login-button').nth(0);
    await login.click();

    await page.waitForTimeout(2000);

//launch using id and name selectors and login
//id- id="username" - so using #
await page.goto('https://the-internet.herokuapp.com/login');
//id
await page.locator('#username').nth(0).fill('tomsmith');

//name  - for name ('[name=""]')  - name="password" 
await page.locator('[name="password"]').fill('SuperSecretPassword!');

//button using type="submit"
await page.locator('button[type="submit"]').click();
//    await page.waitForTimeout(2000);


//launch demoqa using basic selectors and click submit button
await page.goto('https://demoqa.com/text-box');
//id
await page.locator('#userName').fill('John Doe');

await page.locator('#userEmail').fill('john.doe@example.com');

await page.locator('#currentAddress').fill('123 Main Street, Chennai');

await page.locator('#permanentAddress').fill('456 Park Avenue, Chennai');

// Submit the form

await page.locator('#submit').click();

//Using Tagname - means input  input

await page.goto('https://www.saucedemo.com/');
    const tagname=page.locator('input').nth(0);
    await tagname.fill('standard_user');
   
   //using class - . dot wi;l be used

 const fields = page.locator('.input_error.form_input');
await fields.nth(1).fill('secret_sauce');

const submit=page.locator('.submit-button.btn_action');
await submit.click();

//locate name,email,phone fields using diff css attribute selectors

await page.goto('https://testautomationpractice.blogspot.com')
//tagname - means input
await page.locator('input').nth(0).fill('srini');
//class - means . should be given before 
await page.locator('.form-control').nth(0).fill('srr@gmail.com');
//placeholder
await page.locator('[placeholder="Enter Phone"]').fill('4755787658');

    await page.goBack();
        await page.goForward();

await page.url();
await page.waitForTimeout(2000);

});