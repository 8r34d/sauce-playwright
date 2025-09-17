import { expect, type Locator, type Page } from "@playwright/test";
import { InventoryItemDescription } from "../enums/inventory-item-description-enum";
import { InventoryItemName } from "../enums/inventory-item-name-enum";

export class CheckoutOverviewPage {
  readonly page: Page;
  readonly description: Locator;
  readonly finish: Locator;
  readonly title: Locator;

  constructor(page: Page) {
    this.page = page;

    this.description = page.getByTestId("inventory-item-name");
    this.finish = page.getByTestId("finish");
    this.title = page.locator("span", {
      hasText: "Checkout: Overview",
    });
  }

  async at() {
    await expect(this.page).toHaveURL(/checkout-step-two.html/);
    await expect(this.title).toBeVisible();
  }

  async hasDescription(itemName: InventoryItemName) {
    await expect(
      this.description.filter({ hasText: InventoryItemDescription[itemName] })
    ).toBeVisible();
  }
}
