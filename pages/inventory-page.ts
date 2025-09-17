import { expect, type Locator, type Page } from "@playwright/test";
import { InventoryItemDescription } from "../enums/inventory-item-description-enum";
import { AddToCartItemName } from "../enums/add-to-cart-item-name-enum";
import { RemoveFromCartItemName } from "../enums/remove-from-cart-item-name-enum";
import { InventoryItemName } from "../enums/inventory-item-name-enum";

export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator("span", { hasText: "Products" });
  }

  async addItemToCart(itemName: InventoryItemName) {
    this.page.getByTestId(AddToCartItemName[itemName]).click();
  }

  async at() {
    await expect(this.page).toHaveURL(/inventory.html/);
    await expect(this.title).toBeVisible();
  }

  async goto() {
    await this.page.goto("/inventory.html");
  }

  async gotoInventoryItem(itemName: InventoryItemName) {
    await this.page
      .getByRole("link", { name: InventoryItemDescription[itemName] })
      .first()
      .click();
  }

  async removeItemFromCart(itemName: InventoryItemName) {
    this.page.getByTestId(RemoveFromCartItemName[itemName]).click();
  }
}
