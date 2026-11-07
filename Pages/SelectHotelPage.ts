import { Page, Locator, expect } from '@playwright/test';

export class SelectHotelPage {
  private selectRadio: Locator;
  private continueButton: Locator;

  constructor(page: Page) {
    this.selectRadio = page.locator('#radiobutton_0');
    this.continueButton = page.locator('#continue');
  }

  async selectHotel() {
    await expect(this.selectRadio).toBeVisible();
    await this.selectRadio.check();
    await this.continueButton.click();
  }
}