import { Page, Locator, expect } from '@playwright/test';

export class BasePage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Click
    async click(locator: Locator) {
        await locator.click();
    }

    // Fill
    async fill(locator: Locator, value: string) {
        await locator.fill(value);
    }

    // Select dropdown
    async selectDropdown(locator: Locator, value: string) {
        await locator.selectOption(value);
    }

    // Navigate
    async navigate(url: string) {
        await this.page.goto(url);
    }

    // Get text
    async getText(locator: Locator) {
        return await locator.innerText();
    }

    // Check checkbox
    async checkCheckbox(locator: Locator) {
        await locator.check();
    }

    // Uncheck checkbox
    async uncheckCheckbox(locator: Locator) {
        await locator.uncheck();
    }

    // Hover
    async hover(locator: Locator) {
        await locator.hover();
    }

    // Double click
    async doubleclick(locator: Locator) {
        await locator.dblclick();
    }

    // Right click
    async rightclick(locator: Locator) {
        await locator.click({ button: 'right' });
    }

    // Press keyboard key
    async presskey(locator: Locator, value: string) {
        await locator.press(value);
    }

    // Verify element visible
    async verifyvisible(locator: Locator) {
        await expect(locator).toBeVisible();
    }

    // Verify enabled
    async verifyEnabled(locator: Locator) {
        await expect(locator).toBeEnabled();
    }

    // Verify text
    async verifytext(locator: Locator, value: string) {
        await expect(locator).toHaveText(value);
    }

    // Get count
    async getcount(locator: Locator) {
        return await locator.count();
    }

    // Take screenshot
    async takescreenshot(filename: string) {
        await this.page.screenshot({
            path: filename,
            fullPage: true
        });
    }
}
