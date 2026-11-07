import type { Page, Locator } from '@playwright/test';
import { BasePage } from '../utility/BasePage.js';

export class LoginPage extends BasePage {

    private username: Locator;
    private password: Locator;
    private loginButton: Locator;

    constructor(page: Page) {
        super(page);

        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login');
    }

    async login(username: string, password: string) {
        await this.fill(this.username, username);
        await this.fill(this.password, password);
        await this.click(this.loginButton);
    }
}