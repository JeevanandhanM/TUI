import { Page } from "@playwright/test";

export class PassengerDetailsPage {
  constructor(private readonly page: Page) {}

  async fillPassengerDetails() {
    // Lead Passenger Title
    const leadPassengerTitle = this.page.locator("#paxInfoTitle0");
    await leadPassengerTitle.waitFor({ state: "visible" });
    await leadPassengerTitle.selectOption("MR");
    await leadPassengerTitle.click();

    // Lead Passenger Name
    const leadFirstNameInput = this.page
      .getByLabel("lead passenger firstName")
      .getByRole("textbox", { name: "first name" });
    await leadFirstNameInput.click();
    await leadFirstNameInput.fill("jeeva");

    const leadLastNameInput = this.page
      .getByLabel("lead passenger lastName")
      .getByRole("textbox", { name: "surname" });
    await leadLastNameInput.click();
    await leadLastNameInput.fill("mahes");

    // Lead Passenger DOB
    const leadDOBDayInput = this.page
      .getByRole("textbox", { name: "day" })
      .nth(0);
    const leadDOBMonthInput = this.page
      .getByRole("textbox", { name: "month" })
      .nth(0);
    const leadDOBYearInput = this.page
      .getByRole("textbox", { name: "year" })
      .nth(0);
    await leadDOBDayInput.click();
    await leadDOBDayInput.fill("13");
    await leadDOBMonthInput.fill("09");
    await leadDOBYearInput.fill("1997");

    // Address
    const addressLookupInput = this.page.getByRole("textbox", {
      name: "Predictive Address Lookup",
    });
    await addressLookupInput.click();
    await addressLookupInput.fill("ire");
    const addressSuggestion = this.page
      .getByRole("listitem")
      .filter({
        hasText:
          "Saint Mary's Church of Ireland, Church Street, ATHLONE, County Westmeath, N37",
      });
    await addressSuggestion.click();

    // Contact Info
    const telephoneInput = this.page.getByRole("textbox", {
      name: "telephone number",
    });
    await telephoneInput.click();
    await telephoneInput.fill("0712345678");

    const emailInput = this.page.getByRole("textbox", { name: "email id" });
    await emailInput.click();
    await emailInput.fill("jeevagvd@gmail.com");

    const adult1Title = this.page.locator("#paxInfoTitle1");
    await adult1Title.selectOption("MR");
    await adult1Title.click();

    const adult1FirstName = this.page
      .getByLabel("non lead adult 1 first name")
      .getByRole("textbox", { name: "first name" });
    await adult1FirstName.click();
    await adult1FirstName.fill("jeo");

    const adult1LastName = this.page
      .getByLabel("non lead adult 1 surname")
      .getByRole("textbox", { name: "surname" });
    await adult1LastName.click();
    await adult1LastName.fill("wins");

    const adult1DOBDay = this.page.getByRole("textbox", { name: "day" }).nth(1);
    const adult1DOBMonth = this.page
      .getByRole("textbox", { name: "month" })
      .nth(1);
    const adult1DOBYear = this.page
      .getByRole("textbox", { name: "year" })
      .nth(1);
    await adult1DOBDay.click();
    await adult1DOBDay.fill("12");
    await adult1DOBMonth.click();
    await adult1DOBMonth.fill("12");
    await adult1DOBYear.fill("1998");

    const child1Title = this.page.locator("#paxInfoTitle2");
    await child1Title.selectOption("MSTR");

    const child1FirstName = this.page
      .getByLabel("children.0.firstName")
      .getByRole("textbox", { name: "first name" });
    await child1FirstName.click();
    await child1FirstName.fill("aruvi");

    const child1LastName = this.page
      .getByLabel("children 1 surname")
      .getByRole("textbox", { name: "surname" });
    await child1LastName.click();
    await child1LastName.fill("jeev");

    const child1DOBDay = this.page.getByRole("textbox", { name: "day" }).nth(2);
    const child1DOBMonth = this.page
      .getByRole("textbox", { name: "month" })
      .nth(2);
    const child1DOBYear = this.page
      .getByRole("textbox", { name: "year" })
      .nth(2);
    await child1DOBDay.click();
    await child1DOBDay.fill("12");
    await child1DOBMonth.click();
    await child1DOBMonth.fill("12");
    await child1DOBYear.fill("2021");

    const dobInfoTooltip = this.page.getByText(
      "Date of birth (DD/MM/YYYY)Please fill in your date of birth in the format DD/MM",
    );
    await dobInfoTooltip.click();

    const importantInfoCheckbox = this.page
      .getByLabel("important information")
      .getByRole("checkbox", { name: "checkbox" });
    await importantInfoCheckbox.click();

    const continueToPaymentBtn = this.page.getByText("Continue To Payment");
    await continueToPaymentBtn.click();
  }
}
