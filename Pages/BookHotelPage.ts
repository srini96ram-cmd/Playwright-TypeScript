import { Page, Locator, expect } from '@playwright/test';

export interface BookingData {
  firstName: string;
  lastName: string;
  billingAddress: string;
  creditCardNumber: string;
  creditCardType: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
}

export class BookHotelPage {
  private page: Page;
  private firstName: Locator;
  private lastName: Locator;
  private billingAddress: Locator;
  private creditCardNumber: Locator;
  private creditCardType: Locator;
  private expiryMonth: Locator;
  private expiryYear: Locator;
  private cvv: Locator;
  private bookNowButton: Locator;
  private orderNumber: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator('#first_name');
    this.lastName = page.locator('#last_name');
    this.billingAddress = page.locator('#address');
    this.creditCardNumber = page.locator('#cc_num');
    this.creditCardType = page.locator('#cc_type');
    this.expiryMonth = page.locator('#cc_exp_month');
    this.expiryYear = page.locator('#cc_exp_year');
    this.cvv = page.locator('#cc_cvv');
    this.bookNowButton = page.locator('#book_now');
    this.orderNumber = page.locator('#order_no');
  }

  async bookHotel(data: BookingData){
    await this.firstName.fill(data.firstName);
    await this.lastName.fill(data.lastName);
    await this.billingAddress.fill(data.billingAddress);
    await this.creditCardNumber.fill(data.creditCardNumber);

    await this.creditCardType.selectOption(data.creditCardType);
    await this.expiryMonth.selectOption(data.expiryMonth);
    await this.expiryYear.selectOption(data.expiryYear);

    await this.cvv.fill(data.cvv);
    await this.bookNowButton.click();

    await expect(this.orderNumber).toHaveValue(/\S+/, {
      timeout: 60000
    });

    const orderNo = await this.orderNumber.inputValue();

    console.log('Booking successful');
    console.log('Order Number:', orderNo);

    return orderNo;
  }
}