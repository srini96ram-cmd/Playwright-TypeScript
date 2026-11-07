import{test} from '@playwright/test';
test('sstatic tables',async({page})=>{
  /* await page.goto('https://gay9.com/');
    const images = page.locator('//a[@id="thumb"]');
    await images.nth(5).click();
await page.waitForTimeout(2000);
console.log(await images.count());
*/

/*await page.goto('https://en-pornhub.com/');
const t=page.locator('article a img').first();
await t.click();
const video = page.locator('video').first();

await video.evaluate((element: HTMLVideoElement) => {
element.play();

page.waitForTimeout(2000);
});*/

/*await page.goto('https://hdgaytube.xxx/boy-cat/indian');
const t1=page.locator('div a img').first();
await t1.click();
const video = page.locator('video').first();

await video.evaluate((element: HTMLVideoElement) => {
element.play();
});
await page.waitForTimeout(2000);*/

/*await page.goto('https://www.gaymaletube.com/');

page.on('dialog',async dialog=>{
  console.log("alert messages:",dialog.message());
  await dialog.accept();
  
  });*/
  

await page.goto('https://homo.xxx/pornstar/diego-sans/');
const x=page.locator('//*[@id="custom_list_videos_common_videos_list_items"]/div[1]/a/div/img');
await x.click();
const video = page.locator('video').first();

await video.evaluate((element: HTMLVideoElement) => {
element.play();
});
await page.waitForTimeout(2000);

});

