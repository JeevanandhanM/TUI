import { Page } from "@playwright/test";

export class SearchResultsPage {
  constructor(private readonly page: Page) {}

  async filterTUIFlightPackage() {
    //const tuiFlyNetherlandsCheckbox = this.page
    // .getByRole('listitem')
    // .filter({ hasText: /^TUI fly Netherlands$/ })
    // .getByLabel('checkbox');
    //await tuiFlyNetherlandsCheckbox.click();

    // Click 'Continue' on the hotel card
    const selectPackage = this.page
      .locator('[data-test-id="search-results-list"] section')
      .filter({
        hasText:
          "LOG IN TO YOUR MYTUI ACCOUNT TO SAVE €100 ON THIS HOLIDAYGrupotel Cinco Plazas",
      })
      .locator('[data-test-id="continue-button"]')
      .nth(3);
    await selectPackage.click();
    const continueButton = this.page.getByText("Continue", { exact: true });
    await continueButton.click();
  }
}
