import { expect, type Locator, type Page } from "@playwright/test";

export class CheckoutCompletePage {
  readonly page: Page;
  readonly backHome: Locator;
  readonly completeHeader: Locator;
  readonly title: Locator;

  constructor(page: Page) {
    this.page = page;
    this.backHome = page.getByTestId("back-to-products");
    this.completeHeader = page.locator("h2", {
      hasText: "Thank you for your order!",
    });
    this.title = page.locator("span", {
      hasText: "Checkout: Complete!",
    });
  }

  async at() {
    await expect(this.page).toHaveURL(/checkout-complete.html/);
    await expect(this.title).toBeVisible();
    await expect(this.completeHeader).toBeVisible();
  }
}
