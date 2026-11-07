import{test,expect} from '@playwright/test';
test('static tables',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/Automationpractice/');
    const table_count=await page.locator('table');
    const table=await table_count.count();
    console.log("no.of tables",table); //3
    const table_values=await table_count.all();
    for(let result of table_values){
        console.log(await result.innerText());
    }

/*const table_count1=await page.locator('td');
    const table1=await table_count.count();
    console.log("no.of tables",table1); //3
    const table_values1=await table_count1.all();
    for(let result1 of table_values1){
        console.log(await result1.innerText());
    }

const table_count2=await page.locator('tr');
    const table2=await table_count2.count();
    console.log("no.of tables",table2); //3
    const table_values2=await table_count2.all();
    for(let result2 of table_values2){
        console.log(await result2.innerText());
    }

    const table_count3=await page.locator('th');
    const table3=await table_count3.count();
    console.log("no.of tables",table3); //3
    const table_values3=await table_count3.all();
    for(let result3 of table_values){
        console.log(await result3.innerText());
    }
*/
//To Print specific product:

const table_count4=page.locator('(//table[@id="product"]/tbody/tr[1]/th[1])');
console.log(await table_count4.innerText());
 
})
