import { test as base } from "@playwright/test";
import { CartPage } from "../pages/cart-page";
import { CheckoutCompletePage } from "../pages/checkout-complete-page";
import { CheckoutYourInformationPage } from "../pages/checkout-your-information-page";
import { CheckoutOverviewPage } from "../pages/checkout-overview-page";
import { InventoryItemPage } from "../pages/inventory-item-page";
import { InventoryPage } from "../pages/inventory-page";

type CheckoutFlowFixtures = {
  cartPage: CartPage;
  checkoutCompletePage: CheckoutCompletePage;
  checkoutOverviewPage: CheckoutOverviewPage;
  checkoutYourInformationPage: CheckoutYourInformationPage;
  inventoryItemPage: InventoryItemPage;
  inventoryPage: InventoryPage;
};

export const test = base.extend<CheckoutFlowFixtures>({
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    // add fixture steps
    // ...
    // use the fixture value in the test
    await use(cartPage);
    // add cleanup (if applcable)
    // ...
  },
  checkoutCompletePage: async ({ page }, use) => {
    const checkoutCompletePage = new CheckoutCompletePage(page);
    // add fixture steps
    // ...
    // use the fixture value in the test
    await use(checkoutCompletePage);
    // add cleanup (if applcable)
    // ...
  },
  checkoutOverviewPage: async ({ page }, use) => {
    const checkoutOverviewPage = new CheckoutOverviewPage(page);
    // add fixture steps
    // ...
    // use the fixture value in the test
    await use(checkoutOverviewPage);
    // add cleanup (if applcable)
    // ...
  },
  checkoutYourInformationPage: async ({ page }, use) => {
    const checkoutYourInformationPage = new CheckoutYourInformationPage(page);
    // add fixture steps
    // ...
    // use the fixture value in the test
    await use(checkoutYourInformationPage);
    // add cleanup (if applcable)
    // ...
  },
  inventoryItemPage: async ({ page }, use) => {
    const inventoryItemPage = new InventoryItemPage(page);
    // add fixture steps
    // ...
    // use the fixture value in the test
    await use(inventoryItemPage);
    // add cleanup (if applcable)
    // ...
  },
  inventoryPage: async ({ page }, use) => {
    const inventoryPage = new InventoryPage(page);
    // add fixture steps
    // ...
    // use the fixture value in the test
    await use(inventoryPage);
    // add cleanup (if applcable)
    // ...
  },
});
