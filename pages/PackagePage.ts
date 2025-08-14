import { Page } from "@playwright/test";

export class PackagePage {
  constructor(private readonly page: Page) {}

  async alternativeDate() {
    //await this.page.getByRole('gridcell', { name: 'Friday, 15 August 2025, 1561' }).click();
    await this.page.getByText("Continue", { exact: true }).click();
  }

  async continueBooking() {
    const passengerContinueButton = this.page.getByText(
      "Continue To Passenger Details",
      { exact: true },
    );
    await passengerContinueButton.click();
  }
}
