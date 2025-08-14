import { test } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { SearchResultsPage } from "../pages/SearchResultsPage";
import { PackagePage } from "../pages/PackagePage";
import { PassengerDetailsPage } from "../pages/PassengerDetailsPage";
import { PaymentPage } from "../pages/PaymentPage";

test("Complete TUI booking flow using POM", async ({ page }) => {
  // Instantiate page objects
  const home = new HomePage(page);
  const searchResults = new SearchResultsPage(page);
  const packagePage = new PackagePage(page);
  const passengerPage = new PassengerDetailsPage(page);
  const paymentPage = new PaymentPage(page);

  // Close cookie banner
  await home.closeCookies();

  // Perform holiday search
  await home.searchHoliday();

  //  Apply TUI flight filter and select package
  // await searchResults.filterTUIFlightPackage();
  await searchResults.filterTUIFlightPackage();
  //  Continue with the selected holiday package
  await packagePage.alternativeDate();
  await packagePage.continueBooking();

  //  Fill in passenger details
  await passengerPage.fillPassengerDetails();

  //  Enter payment details
  await paymentPage.enterPaymentDetails();
});
