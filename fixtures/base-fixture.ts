import { test as base } from "@playwright/test";
import { InventoryPage } from "../pages/inventory-page";
import { InventoryItemName } from "../enums/inventory-item-name-enum";
import { ShoppingCartComponent } from "../components/shopping-cart-component";
import { ProductSortComponent } from "../components/product-sort-component";

export type BaseFixture = {
  inventoryPage: InventoryPage;
  products: Array<InventoryItemName>;
  productSort: ProductSortComponent;
  shoppingCart: ShoppingCartComponent;
};

export const test = base.extend<BaseFixture>({
  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);
    await use(inventoryPage);
  },
  products: [
    InventoryItemName.Backpack,
    InventoryItemName.BikeLight,
    InventoryItemName.BoltTShirt,
    InventoryItemName.FleeceJacket,
    InventoryItemName.Onesie,
    InventoryItemName.RedTShirt,
  ],
  productSort: async ({ page }, use) => {
    const productSort = new ProductSortComponent(page);
    await use(productSort);
  },
  shoppingCart: async ({ page }, use) => {
    const shoppingCart = new ShoppingCartComponent(page);
    await use(shoppingCart);
  },
});
export { expect } from "@playwright/test";
