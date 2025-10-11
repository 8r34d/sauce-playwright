import { test as base } from "@playwright/test";
import { InventoryItemName } from "../../enums/inventory-item-name-enum";
import { InventoryPage } from "../../pages/inventory-page";
import { ShoppingCartComponent } from "../../components/shopping-cart-component";

type ExampleFixtures = {
  inventoryPage: InventoryPage;
  shoppingCart: ShoppingCartComponent;
};

export const test = base.extend<ExampleFixtures>({
  inventoryPage: async ({ page, shoppingCart }, use) => {
    const inventory = new InventoryPage(page);
    await inventory.goto();
    await inventory.at();
    await shoppingCart.hasQuantity(0);
    await inventory.addItemToCart(InventoryItemName.Backpack);
    await shoppingCart.hasQuantity(1);
    await use(inventory);
  },
  shoppingCart: async ({ page }, use) => {
    const shoppingCart = new ShoppingCartComponent(page);
    await use(shoppingCart);
  },
});
export { expect } from "@playwright/test";
