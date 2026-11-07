
//locate wikipedia search button using xpath contains()
//  and click it.


import{test,expect}from '@playwright/test';
test('exam',async({page})=>{

/*await page.goto('https://testautomationpractice.blogspot.com/');

//Entering Search text

await page.locator('//input[contains(@class,"wikipedia-search-input")]').fill("Srinivasan");

//clicking wikipedia search button

await page.locator('//input[contains(@class,"wikipedia-search-button")]').click();

//Locate wikipedia search results

const res=await page.locator(
    '//div[contains(@class,"wikipedia-search-results")]'
);

//wait until results appear

  await expect(res.first()).toBeVisible();

  //count results

  const count=await res.count();
  console.log("count value:",count);

  //print resulttext

 for(let i=0;i<count;i++){
console.log(await res.nth(i).innerText());

//clicking first search result

await res.first().click();

 const specificResult = page.locator(
    '//div[contains(@class,"wikipedia-search-results")]//a[contains(normalize-space(.),"Srinivasan")]'
  );
  await specificResult.nth(0).click();

await page.waitForTimeout(2000);
 }

//fill all fields Use Xpath with Multiple Attributes

await page.goto('https://demoqa.com/text-box');
await page.locator('//input[@id="userName"and @type="text"]').fill('srini');

await page.locator('//textArea[@id="currentAddress" and @placeholder="Current Address"]').fill("1223,sss street,chn,tn,in");

await page.locator('//textArea[@id="permanentAddress" and @cols="20"]').fill("1223,sss street,chn,tn,in");

await page.locator('//button[@id="submit"and @type="button"]').click();

//enter values to 3 fields text using  
//Xpath Attribute  Expressions

await page.goto('https://www.leafground.com/input.xhtml');
//await page.locator('//input[@name="username"]').fill("sss");

await page.locator(
    '//input[@name="j_idt88:name"]'
  ).fill('Srinivasan');
await page.locator('//input[@type="text"]').nth(0).fill('ssd');
await page.locator('//input[starts-with(@id,"j_idt88")]').nth(0).fill('sssd');

//
await page.goto('https://www.saucedemo.com/');
page.locator('//input[@id="user-name"]').fill('srr');
*/
//locate all hyperlinks <a>

await page.goto('https://www.saucedemo.com/');
const links=page.locator('a');
const count3=await links.count();
console.log('ttl hyperlinks',count3);
const links1=await links.allInnerTexts();
console.log(links1);

//locate all checkboxes& select only those that are not selected
await page.goto('https://testautomationpractice.blogspot.com/');

const checkbox = page.locator('input[type="checkbox"]');

  // Count all checkboxes
  const count = await checkbox.count();
  console.log('Total checkboxes:', count);

  // Select all checkboxes
  for (let i = 0; i < count; i++) {
    await checkbox.nth(i).check();
  }

  // Verify all checkboxes are selected
  const checkedCount = await page.locator(
    'input[type="checkbox"]:checked'
  ).count();

  console.log('Selected checkboxes:', checkedCount);

  expect(checkedCount).toBe(count);


  //radio buttons

  

const radio = page.locator('input[type="radio"]');
//count radio
const countradio=await radio.count();
console.log("countofradio",countradio);
await radio.nth(0).check();
//
const countradiocount=page.locator('input[type="radio"]:checked').count();
console.log("checkedd",countradiocount);

//common css methods
//starts with ^
const s= await page.locator('input[type^="text"]').first();
await s.fill('sss');
//ends with $
const s1=await page.locator('input[placeholder$="EMail"]').fill('sr@gmail.com');
//contains
const s2=await page.locator('textarea[id*="textarea"]').first().type('123,ss street,ny');

await page.goto('https://www.leafground.com/button.xhtml');
//locate buttons using css selectors 
//tagname #id class,[attribute="value"]
//click and confirm title
//const click1=page.locator('.ui-button-text.ui-c').first();
//await click1.click();
const d=page.locator('//button[@type="button" and @disabled]');
await expect(d).toBeDisabled();
const span=page.locator('span[text()="Submit"]');
//click image button and click on hidden button

const Image=await page.locator('span:has-text("Image")').click();
//Mouse Hover &confirm colour changed

const mouse=page.locator('span:text-is("Success")').first();
await mouse.hover();
await page.waitForTimeout(2000);

});



