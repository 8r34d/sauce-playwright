import { expect, type Locator, type Page } from "@playwright/test";
import { InventoryItemDescription } from "../enums/inventory-item-description-enum";
import { InventoryItemName } from "../enums/inventory-item-name-enum";

export class CartPage {
  readonly page: Page;
  readonly checkout: Locator;
  readonly description: Locator;
  readonly title: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkout = page.getByTestId("checkout");
    this.description = page.getByTestId("inventory-item-name");
    this.title = page.locator("span", { hasText: "Your Cart" });
  }

  async at() {
    await expect(this.page).toHaveURL(/cart.html/);
    await expect(this.title).toBeVisible();
  }

  async hasDescription(itemName: InventoryItemName) {
    await expect(
      this.description.filter({ hasText: InventoryItemDescription[itemName] })
    ).toBeVisible();
  }
}
