import { expect, type Locator, type Page } from "@playwright/test";
import { YourInformation } from "../types/YourInformation";

export class CheckoutYourInformationPage {
  readonly page: Page;
  readonly continue: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly postalCode: Locator;
  readonly title: Locator;

  constructor(page: Page) {
    this.page = page;
    this.continue = page.getByTestId("continue");
    this.firstName = page.getByTestId("firstName");
    this.lastName = page.getByTestId("lastName");
    this.postalCode = page.getByTestId("postalCode");
    this.title = page.locator("span", {
      hasText: "Checkout: Your Information",
    });
  }

  async at() {
    await expect(this.page).toHaveURL(/checkout-step-one.html/);
    await expect(this.title).toBeVisible();
  }

  async fillYourInformation(yourInformation: YourInformation) {
    await this.firstName.fill(yourInformation.firstName);
    await this.lastName.fill(yourInformation.lastName);
    await this.postalCode.fill(yourInformation.postalCode);
  }
}
