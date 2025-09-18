import { test as base } from "@playwright/test";
import { CartPage } from "../pages/cart-page";
import { CheckoutCompletePage } from "../pages/checkout-complete-page";
import { CheckoutYourInformationPage } from "../pages/checkout-your-information-page";
import { CheckoutOverviewPage } from "../pages/checkout-overview-page";
import { InventoryItemPage } from "../pages/inventory-item-page";
import { InventoryPage } from "../pages/inventory-page";
import { ShoppingCartComponent } from "../components/shopping-cart-component";

type ExampleFixtures = {
  cartPage: CartPage;
  checkoutCompletePage: CheckoutCompletePage;
  checkoutOverviewPage: CheckoutOverviewPage;
  checkoutYourInformationPage: CheckoutYourInformationPage;
  inventoryItemPage: InventoryItemPage;
  inventoryPage: InventoryPage;
  shoppingCart: ShoppingCartComponent;
};

export const test = base.extend<ExampleFixtures>({
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);

    await use(cartPage);
  },
  checkoutCompletePage: async ({ page }, use) => {
    const checkoutCompletePage = new CheckoutCompletePage(page);

    await use(checkoutCompletePage);
  },
  checkoutOverviewPage: async ({ page }, use) => {
    const checkoutOverviewPage = new CheckoutOverviewPage(page);

    await use(checkoutOverviewPage);
  },
  checkoutYourInformationPage: async ({ page }, use) => {
    const checkoutYourInformationPage = new CheckoutYourInformationPage(page);

    await use(checkoutYourInformationPage);
  },
  inventoryItemPage: async ({ page }, use) => {
    const inventoryItemPage = new InventoryItemPage(page);

    await use(inventoryItemPage);
  },
  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);

    await use(inventoryPage);
  },
  shoppingCart: async ({ page }, use) => {
    const shoppingCart = new ShoppingCartComponent(page);

    await use(shoppingCart);
  },
});
export { expect } from "@playwright/test";
