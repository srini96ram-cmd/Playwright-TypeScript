import {Page, Locator, expect} from '@playwright/test';

export class BasePage{

    constructor(Page:Page){}
//click
async click(locator:Locator){
    await locator.click();
}

async fill(locator:Locator, value:string){
    await locator.fill(value);
}

async selectDropdown(locator:Locator, value:string){
   await locator.selectOption(value);
}

async navigate(url:string){
    await this.Page.goto(url);
}

//To get text
async getText(locator:Locator,value:string){
    await locator.innerText();
}
//check checkbox
async checkCheckbox(locator: Locator){
    await locator.check();
  }
//uncheck checkbox
async uncheckCheckbox(locator: Locator) {
    await locator.uncheck();
  }
  //hover
  async hover(locator:Locator){
    await locator.hover();
  }
  //doubleclick
  async doubleclick(locator:Locator){
    await locator.dblclick();
  }
  //Right click
  async rightclick(locator:Locator){
    await locator.click({button:'right'});
  }
  //Press keyboard key
  async presskey(locator:Locator,value:string){
    await locator.press(value);
  }
  //verify element visible
  async verifyvisible(locator:Locator){
    await expect(locator).toBeVisible();
  }
  async verifyEnabled(locator:Locator){
    await expect(locator).toBeEnabled();
  }
  async verifytext(locator:Locator,value:string){
    await expect(locator).toHaveText(value);
  }
  async getcount(locator:Locator,value:number){
    await expect(locator).count();
  }
async takescreenshot(filename:string){
    await this.page.screenshot({
        path:filename,
        fullPage:true
    });
}
}