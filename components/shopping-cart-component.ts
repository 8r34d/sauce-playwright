import { expect, type Locator, type Page } from "@playwright/test";

export class ShoppingCartComponent {
  readonly page: Page;
  readonly shoppingCartBadge: Locator;
  readonly shoppingCartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shoppingCartBadge = page.getByTestId("shopping-cart-badge");
    this.shoppingCartLink = page.getByTestId("shopping-cart-link");
  }

  async hasQuantity(quantity: number) {
    expect(quantity).toBeGreaterThanOrEqual(0);
    if (quantity === 0) {
      await expect(this.shoppingCartBadge).toHaveCount(0);
    } else {
      await expect(this.shoppingCartBadge).toHaveText(`${quantity}`);
    }
  }

  async viewCart() {
    await this.shoppingCartLink.click();
  }
}
