import { test } from "@playwright/test";
import { CartPage } from "../pages/cart-page";
import { CheckoutCompletePage } from "../pages/checkout-complete-page";
import { CheckoutFlowHelper } from "../helpers/checkout-flow-helper";
import { CheckoutOverviewPage } from "../pages/checkout-overview-page";
import { CheckoutYourInformationPage } from "../pages/checkout-your-information-page";
import { InventoryItemPage } from "../pages/inventory-item-page";
import { InventoryPage } from "../pages/inventory-page";
import { ShoppingCartComponent } from "../components/shopping-cart-component";
import { InventoryItemName } from "../enums/inventory-item-name-enum";

/**
 * Checkout Spec
 *
 * - inventory.html
 *   - product listing page (plp)
 *
 * - inventory-item.html
 *   - product detail page (pdp)
 *
 * - cart.html
 *   - cart
 *
 * - checkout-step-one.html
 *   - your information
 *
 * - checkout-step-two.html
 *   - overview
 *
 * - checkout-complete.html
 *   - checkout complete
 */

// Test Data : Parameterize tests --->
const testBackpack = {
  test: "a backpack to carry my books!",
  order: {
    customerDetails: {
      firstName: "Backpack",
      lastName: "Item",
      postalCode: "SW5",
    },
    itemNames: [InventoryItemName.Backpack],
  },
};
const testBikeLight = {
  test: "a bike light to illuminate my journey!",
  order: {
    customerDetails: {
      firstName: "BikeLight",
      lastName: "Item",
      postalCode: "SW5",
    },
    itemNames: [InventoryItemName.BikeLight],
  },
};
// <---

let cartPage: CartPage;
let checkoutCompletePage: CheckoutCompletePage;
let checkoutFlowHelper: CheckoutFlowHelper;
let checkoutOverviewPage: CheckoutOverviewPage;
let checkoutYourInformationPage: CheckoutYourInformationPage;
let inventoryItemPage: InventoryItemPage;
let inventoryPage: InventoryPage;
let shoppingCart: ShoppingCartComponent;

test.beforeEach(async ({ page }) => {
  cartPage = new CartPage(page);
  checkoutCompletePage = new CheckoutCompletePage(page);
  checkoutFlowHelper = new CheckoutFlowHelper(page);
  checkoutOverviewPage = new CheckoutOverviewPage(page);
  checkoutYourInformationPage = new CheckoutYourInformationPage(page);
  inventoryItemPage = new InventoryItemPage(page);
  inventoryPage = new InventoryPage(page);
  shoppingCart = new ShoppingCartComponent(page);
});

test.describe("Checkout", () => {
  test.describe("Add To Cart From Product Listing Page", () => {
    test.describe("Select Any Two Items", () => {
      test("should be able to select backpack and bike light", async ({
        page,
      }) => {
        const data = {
          customerDetails: {
            firstName: "Two",
            lastName: "Items",
            postalCode: "SW5",
          },
          itemNames: [InventoryItemName.Backpack, InventoryItemName.BikeLight],
        };
        await inventoryPage.goto();
        await test.step("Add To Cart : Two Items", async () => {
          await shoppingCart.hasQuantity(0);
          await inventoryPage.addItemToCart(data.itemNames[0]);
          await shoppingCart.hasQuantity(1);
          await inventoryPage.addItemToCart(data.itemNames[1]);
          await shoppingCart.hasQuantity(2);
        });
        await test.step("Remove From Cart : Two Items", async () => {
          await inventoryPage.removeItemFromCart(data.itemNames[0]);
          await shoppingCart.hasQuantity(1);
          await inventoryPage.removeItemFromCart(data.itemNames[1]);
          await shoppingCart.hasQuantity(0);
        });
        await checkoutFlowHelper.selectAnyTwoItemsFromPLPAndCheckout(data);
      });
      test("should be able to select bolt t-shirt and fleece jacket", async ({
        page,
      }) => {
        const data = {
          customerDetails: {
            firstName: "Two",
            lastName: "Items",
            postalCode: "SW5",
          },
          itemNames: [
            InventoryItemName.BoltTShirt,
            InventoryItemName.FleeceJacket,
          ],
        };
        await inventoryPage.goto();
        await test.step("Add To Cart : Two Items", async () => {
          await shoppingCart.hasQuantity(0);
          await inventoryPage.addItemToCart(data.itemNames[0]);
          await shoppingCart.hasQuantity(1);
          await inventoryPage.addItemToCart(data.itemNames[1]);
          await shoppingCart.hasQuantity(2);
        });
        await test.step("Remove From Cart : Two Items", async () => {
          await inventoryPage.removeItemFromCart(data.itemNames[0]);
          await shoppingCart.hasQuantity(1);
          await inventoryPage.removeItemFromCart(data.itemNames[1]);
          await shoppingCart.hasQuantity(0);
        });
        await checkoutFlowHelper.selectAnyTwoItemsFromPLPAndCheckout(data);
      });
      test("should be able to select onesie and red t-shirt", async ({
        page,
      }) => {
        const data = {
          customerDetails: {
            firstName: "Two",
            lastName: "Items",
            postalCode: "SW5",
          },
          itemNames: [InventoryItemName.Onesie, InventoryItemName.RedTShirt],
        };
        await inventoryPage.goto();
        await test.step("Add To Cart : Two Items", async () => {
          await shoppingCart.hasQuantity(0);
          await inventoryPage.addItemToCart(data.itemNames[0]);
          await shoppingCart.hasQuantity(1);
          await inventoryPage.addItemToCart(data.itemNames[1]);
          await shoppingCart.hasQuantity(2);
        });
        await test.step("Remove From Cart : Two Items", async () => {
          await inventoryPage.removeItemFromCart(data.itemNames[0]);
          await shoppingCart.hasQuantity(1);
          await inventoryPage.removeItemFromCart(data.itemNames[1]);
          await shoppingCart.hasQuantity(0);
        });
        await checkoutFlowHelper.selectAnyTwoItemsFromPLPAndCheckout(data);
      });
    });
    test.describe("Select All Items", () => {
      test("should be able to select all items", async ({ page }) => {
        const data = {
          customerDetails: {
            firstName: "All",
            lastName: "Items",
            postalCode: "SW5",
          },
          itemNames: [
            InventoryItemName.Backpack,
            InventoryItemName.BikeLight,
            InventoryItemName.BoltTShirt,
            InventoryItemName.FleeceJacket,
            InventoryItemName.Onesie,
            InventoryItemName.RedTShirt,
          ],
        };
        await checkoutFlowHelper.selectAllItemsFromPLPAndCheckout(data);
      });
    });
  });
  test.describe("Add To Cart From Product Detail Page", () => {
    test.describe("Select Any Item", () => {
      test.describe("Parameterize tests", () => {
        [
          { name: "Parameterize test 01", data: testBackpack },
          { name: "Parameterize test 02", data: testBikeLight },
        ].forEach(({ name, data }) => {
          test(`${name} : should be able to select ${data.test}`, async ({
            page,
          }) => {
            await checkoutFlowHelper.selectAnyItemFromPDPAndCheckout(
              data.order
            );
          });
        });
      });
      test("should be able to select bolt t-shirt", async ({ page }) => {
        await checkoutFlowHelper.selectAnyItemFromPDPAndCheckout({
          customerDetails: {
            firstName: "BoltTShirt",
            lastName: "Item",
            postalCode: "SW5",
          },
          itemNames: [InventoryItemName.BoltTShirt],
        });
      });
      test("should be able to select fleece jacket", async ({ page }) => {
        await checkoutFlowHelper.selectAnyItemFromPDPAndCheckout({
          customerDetails: {
            firstName: "FleeceJacket",
            lastName: "Item",
            postalCode: "SW5",
          },
          itemNames: [InventoryItemName.FleeceJacket],
        });
      });
      test("should be able to select onesie", async ({ page }) => {
        await checkoutFlowHelper.selectAnyItemFromPDPAndCheckout({
          customerDetails: {
            firstName: "Onesie",
            lastName: "Item",
            postalCode: "SW5",
          },
          itemNames: [InventoryItemName.Onesie],
        });
      });
      test("should be able to select red t-shirt", async ({ page }) => {
        await checkoutFlowHelper.selectAnyItemFromPDPAndCheckout({
          customerDetails: {
            firstName: "RedTShirt",
            lastName: "Item",
            postalCode: "SW5",
          },
          itemNames: [InventoryItemName.RedTShirt],
        });
      });
    });
  });
});
