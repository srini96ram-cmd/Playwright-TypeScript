//launching browser and close the browser

import {test,expect} from '@playwright/test';

test('locator methods',async({page})=>{

//Using input class -input class="input_error form_input"

    await page.goto("https://www.saucedemo.com/");
    await page.locator('input').first().fill('standard_user');
    await page.locator('input').nth(1).fill('secret_sauce');
    await page.locator('input').last().click();
    await page.waitForTimeout(2000);

//Using div class - div class="form_group" - countval: 70
//count()- returns the totalno of elements using locator.

const countval=await page.locator('div').count();
console.log("countval:",countval);
    await page.waitForTimeout(2000);

//using locator.all - returns array of locators rep all matched elements.

const countval1=await page.locator('div').all();
console.log("countval1:",countval1);
    await page.waitForTimeout(2000);

//locator.locator
//used to locate child elements inside other element.
//hierarchical locators
    await page.goto("https://www.saucedemo.com/");

await page.locator('.form_group').locator('#user-name').fill('standard_user');
    await page.waitForTimeout(2000);


    //locator.isVisible(); -element is visible on page.
    await page.goto("https://www.saucedemo.com/");
const visible=await page.locator("#login").isVisible();
console.log(visible);

    await page.goto("https://www.saucedemo.com/");
//locator.isEnabled() - whether element is enabled and interactable
const enabled=await page.locator("#submit").isEnabled();
console.log(enabled);

//locator.textContent(); - returns raw text content of an element
//locator.innerText();- Returns visible text shown to user.




});


