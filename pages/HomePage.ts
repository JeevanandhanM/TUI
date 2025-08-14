import { Page } from "@playwright/test";

export class HomePage {
  constructor(private readonly page: Page) {}

  async closeCookies() {
    await this.page.goto("https://www.tuiholidays.ie/");
    const cookieBtn = this.page.getByRole("button", { name: "Accept" });
    if (await cookieBtn.isVisible()) {
      await cookieBtn.click();
    }
  }

  async searchHoliday() {
    // Select the main input field (possibly a keyword or location input)
    const textInput = this.page.getByRole("textbox", { name: "text input" });
    await textInput.click();
    const cityInput = this.page.locator("label").filter({ hasText: "Dublin" });
    await cityInput.click();

    // Select the destination input and fill in 'Spain'

    const listIcon = this.page
      .locator("div")
      .filter({ hasText: /^List$/ })
      .getByRole("img");
    await listIcon.click();
    const spainLink = this.page.getByRole("link", {
      name: "Spain",
      exact: true,
    });
    await spainLink.click();
    const spainAllLabel = this.page
      .locator("label")
      .filter({ hasText: "Spain (ALL)" });
    await spainAllLabel.click();
    const destinationRegionButton = this.page
      .getByRole("region", { name: "destinations" })
      .getByLabel("button");
    await destinationRegionButton.click();
    // Select the 'Select Date' input and choose a date
    const dateInput = this.page.getByRole("textbox", { name: "select date" });
    await dateInput.click();
    const departureDateRegion = this.page.getByRole("region", {
      name: "Departure date",
    });
    await departureDateRegion.getByLabel("Select").selectOption("2025-12");
    await this.page.getByRole("cell", { name: "12" }).click(); // Select the 12th day

    // Select room and guests options
    const roomsAndGuestsInput = this.page.getByRole("textbox", {
      name: "rooms and guests",
    });
    await roomsAndGuestsInput.click();

    // Select number of children
    const childSelect = this.page
      .getByLabel("child select")
      .getByLabel("Select");
    await childSelect.selectOption("1");

    // Select age for the child
    const ageSelect = this.page
      .getByRole("listitem", { name: "age select" })
      .getByLabel("Select");
    await ageSelect.selectOption("4");

    // Open the child select again if necessary
    await childSelect.click();

    // Click on the 'Search' button
    const searchButton = this.page.getByText("Search", { exact: true });
    await searchButton.click();
  }
}
