//frames - used to locate 1 webpage inside other webpage.

import{test} from '@playwright/test';
test('frames',async({page})=>{
  await page.goto('https://vinothqaacademy.com/iframe/');
  const frames=page.frames();
  console.log("noofframes:",frames.length);
  const frames1:any=await page.frame({name:"employeetable"});
  const username1= frames1.locator('//input[@id="nameInput"]');
await username1.fill('ss');

const fframes2:any=await page.frame({url:'https://vinothqaacademy.com/webtable/'});
const username2= fframes2.locator('//input[@id="nameInput"]');
await username2.fill('ssssds');


await page.goto('https://the-internet.herokuapp.com/nested_frames');
const frames4=page.frames();
console.log(frames.length);

const loginframe:any=page.frameLocator('//frame[@name="frame-top"]').frameLocator('//frame[@name="frame-left"]');
const username4=await loginframe.locator('//body[normalize-space()="LEFT"]');
await page.waitForTimeout(2000);
});

/*const fframes3:any=await page.frame('/iframe[@name="employeetable"]');
//const username3=fframes3.locator('//input[@placeholder="Name"]');
const username3= await fframes3.locator('//input[@id="nameInput"]');
await username3.fill('ssddff');*/

//});