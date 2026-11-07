//launching browser and close the browser

import {test} from '@playwright/test';

test('launch browser',async({page})=>{

    await page.goto("https://www.google.com/");
    console.log("google");

    await page.close();
});


