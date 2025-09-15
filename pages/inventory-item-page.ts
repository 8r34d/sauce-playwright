import { expect, type Locator, type Page } from "@playwright/test";
import { InventoryItemDescription } from "../enums/inventory-item-description-enum";
import { InventoryItemName } from "../enums/inventory-item-name-enum";

export class InventoryItemPage {
  private readonly page: Page;
  private readonly addToCart: Locator;
  private readonly itemName: Locator;
  private readonly remove: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCart = page.getByTestId("add-to-cart");
    this.itemName = page.getByTestId("inventory-item-name");
    this.remove = page.getByTestId("remove");
  }

  async at(itemName: InventoryItemName) {
    await expect(this.page).toHaveURL(/inventory-item.html/);
    await expect(this.itemName).toHaveText(InventoryItemDescription[itemName]);
  }

  async addItemToCart() {
    await this.addToCart.click();
  }

  async removeItemFromCart() {
    await this.remove.click();
  }
}
