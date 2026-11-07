import { Page, Locator } from '@playwright/test';
//import { BasePage} from '../utility/BasePage';

export interface SearchHotelData {
  location: string;
  hotel: string;
  roomType: string;
  numberOfRooms: string;
  checkInDate: string;
  checkOutDate: string;
  adultsPerRoom: string;
  childrenPerRoom: string;
}

export class SearchHotelPage {
  private location: Locator;
  private hotel: Locator;
  private roomType: Locator;
  private numberOfRooms: Locator;
  private checkInDate: Locator;
  private checkOutDate: Locator;
  private adultsPerRoom: Locator;
  private childrenPerRoom: Locator;
  private searchButton: Locator;

  constructor(page: Page) {
    this.location = page.locator('#location');
    this.hotel = page.locator('#hotels');
    this.roomType = page.locator('#room_type');
    this.numberOfRooms = page.locator('#room_nos');
    this.checkInDate = page.locator('#datepick_in');
    this.checkOutDate = page.locator('#datepick_out');
    this.adultsPerRoom = page.locator('#adult_room');
    this.childrenPerRoom = page.locator('#child_room');
    this.searchButton = page.locator('#Submit');
  }

  async searchHotel(data: SearchHotelData) {
    await this.location.selectOption({ label: data.location });
    await this.hotel.selectOption({ label: data.hotel });
    await this.roomType.selectOption({ label: data.roomType });
    await this.numberOfRooms.selectOption(data.numberOfRooms);

    await this.checkInDate.fill(data.checkInDate);
    await this.checkOutDate.fill(data.checkOutDate);

    await this.adultsPerRoom.selectOption(data.adultsPerRoom);
    await this.childrenPerRoom.selectOption(data.childrenPerRoom);

    await this.searchButton.click();
  }
}