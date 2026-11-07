import type{Page,Locator} from '@playwright/test';
import { BasePage} from '../utility/BasePage';

export class LoginPage extends BasePage 
{
    private username;
    private password;
    private loginButton;

    constructor(page:Page){
        super(page);

        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login');
    }


    async login(username:string , password:string){
        await this.fill(this.username,username);
        await this.fill(this.password, password);
        await this.click(this.loginButton);
    }



}