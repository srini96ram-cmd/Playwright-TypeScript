import{test,expect} from '@playwright/test';
test('flipkart',async({page})=>{
    await page.goto('https://www.flipkart.com/');
    page.on('dialog',async(dialog)=>{
        await dialog.dismiss();
        
    })
    const productsearch=page.getByPlaceholder('Search for Products, Brands and More').first();
    await productsearch.fill('fashion');
    await productsearch.press('Enter');
   // const ps=await page.getByText('Fashion',{exact:true}).first();
    //await ps.click();
    const Men=page.getByText('Men',{exact:true}).first();
    await Men.hover();
    const watches=page.locator('a[title="Watches"]');
    await watches.hover();
    /* We cannot use this as link is there, we cannot use text.const fasttrack=page.locator('a[text="fastrack"]');
    await fasttrack.click();*/

    const fastrack = page.getByRole('link', {
  name: 'Fastrack',
  exact: true
});

await fastrack.click();
    


for (let i = 1; i <= 3; i++) {

  console.log("Page Number:", i);

  // Click pagination 1, 2, 3
  await page.getByRole('link', {
    name: String(i),
    exact: true
  }).click();

  await page.waitForTimeout(2000);

  // Print watch names and prices
  const products = page.locator('div[data-id]');

  const count = await products.count();

  for (let j = 0; j < count; j++) {
    const product = products.nth(j);

    const name = await product.locator('a[title]').first().getAttribute('title');

    const price :any= await product.locator('div:has-text("₹")').last();

    console.log("Watch:", name, "Price:", price);
    const price1:any = await price.count() > 0
    ? await price.innerText()
    : 'Price not found';

  console.log("Watch:", name, "Price:", price);
}
  
}
    await page.waitForTimeout(2000);
   
});