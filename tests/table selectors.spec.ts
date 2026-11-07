
import { test } from '@playwright/test';
test('checkbox', async ({ page }) => {
  test.setTimeout(17000);

    await page.goto('https://www.saucedemo.com/');
 //descendant selector -- div input
    const username=page.locator('div input').first();
    await username.fill("sss");
//child selector -- div>input

    const username1=page.locator('div>input').first();
    await username1.fill("sdfgsss");
    

    //adjacent sibling -- label+input

   /* await page.goto('https://the-internet.herokuapp.com/forgot_password');
    const adjacentsibling=page.locator('label+input');
    await adjacentsibling.fill('ss@mail.com');*/

    //general sibling -- select all siblings
    await page.goto('http://uitestingplayground.com/cssselectors');
    const generalsibling=page.locator('p~span');
   console.log(await generalsibling.innerText());
});