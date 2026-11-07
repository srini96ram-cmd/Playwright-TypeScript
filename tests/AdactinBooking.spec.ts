
import { test, expect } from '@playwright/test';
import path from 'node:path';
import 'dotenv/config';

import { LoginPage } from '../Pages/LoginPage';
import {
  SearchHotelPage,
   SearchHotelData
} from '../Pages/SearchHotelPage';
import { SelectHotelPage } from '../Pages/SelectHotelPage';
import {
  BookHotelPage,
  type BookingData
} from '../Pages/BookHotelPage';
import { ExcelReader } from '../utils/ExcelReader';

test('Adactin complete hotel booking', async ({ page }) => {

  // Read credentials from .env
  const username = process.env.USER_NAME;
  const password = process.env.PASS_WORD;
  const url = process.env.BASE_URL;

  if (!username || !password || !url) {
    throw new Error('Missing Adactin credentials in .env');
  }

  // Read Excel data
  const excelPath = path.join(
    process.cwd(),
    'testdata',
    'AdactinData.xlsx'
  );

  console.log('Excel path:', excelPath);

  const searchData = ExcelReader.readData(
    excelPath,
    'SearchHotel'
  ) as unknown as SearchHotelData;

  const bookingData = ExcelReader.readData(
    excelPath,
    'Booking'
  ) as unknown as BookingData;

  // Step 1: Login
  await page.goto(url);

  const loginPage = new LoginPage(page);
  await loginPage.login(username, password);

  await expect(page.locator('#location')).toBeVisible();
  console.log('Login successful');

  // Step 2: Search Hotel
  const searchHotelPage = new SearchHotelPage(page);
  await searchHotelPage.searchHotel(searchData);

  console.log('Hotel search completed');

  // Step 3: Select Hotel
  const selectHotelPage = new SelectHotelPage(page);
  await selectHotelPage.selectHotel();

  console.log('Hotel selected');

  // Step 4: Book Hotel
  const bookHotelPage = new BookHotelPage(page);
  const orderNo = await bookHotelPage.bookHotel(bookingData);

  expect(orderNo.trim()).not.toBe('');

  console.log('Booking successful');
  console.log('Order Number:', orderNo);

});
