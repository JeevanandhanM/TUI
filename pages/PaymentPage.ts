import { Page } from "@playwright/test";

export class PaymentPage {
  constructor(private readonly page: Page) {}
  async enterPaymentDetails() {
    // Get the iframe locator
    const paymentIframeLocator = this.page
      .locator("#payment-opp-root iframe")
      .first();
    const paymentFrame = paymentIframeLocator.contentFrame();

    // Fill in card number
    const cardNumberInput = paymentFrame.getByTestId("card-number");
    await cardNumberInput.click();
    await cardNumberInput.fill("1424 2412 2134 1212");

    // Fill in cardholder name
    const cardholderNameInput = paymentFrame.getByTestId("cardholder-name");
    await cardholderNameInput.click();
    await cardholderNameInput.fill("jeeva");

    // Fill in expiration date
    const expireMonthInput = paymentFrame.getByTestId("expire-month");
    const expireYearInput = paymentFrame.getByTestId("expire-year");
    await expireYearInput.click(); // Open dropdown or focus
    await expireMonthInput.fill("12");
    await expireYearInput.fill("29");

    // Fill in CVV
    const cvvInput = paymentFrame.getByTestId("cvv");
    await cvvInput.click();
    await cvvInput.fill("143");
  }
}
