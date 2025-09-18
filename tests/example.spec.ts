import { InventoryItemName } from "../enums/inventory-item-name-enum";
import { test, expect } from "../fixtures/example-fixture";

/**
 * Example Spec
 *
 * Using Example Fixture
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
const testBoltTShirt = {
  test: "a bike light to illuminate my journey!",
  order: {
    customerDetails: {
      firstName: "BoltTShirt",
      lastName: "Item",
      postalCode: "SW5",
    },
    itemNames: [InventoryItemName.BoltTShirt],
  },
};
const testFleeceJacket = {
  test: "a bike light to illuminate my journey!",
  order: {
    customerDetails: {
      firstName: "FleeceJacket",
      lastName: "Item",
      postalCode: "SW5",
    },
    itemNames: [InventoryItemName.FleeceJacket],
  },
};
const testOnesie = {
  test: "a bike light to illuminate my journey!",
  order: {
    customerDetails: {
      firstName: "Onesie",
      lastName: "Item",
      postalCode: "SW5",
    },
    itemNames: [InventoryItemName.Onesie],
  },
};
const testRedTShirt = {
  test: "a bike light to illuminate my journey!",
  order: {
    customerDetails: {
      firstName: "RedTShirt",
      lastName: "Item",
      postalCode: "SW5",
    },
    itemNames: [InventoryItemName.RedTShirt],
  },
};
// <---

test.describe("Example", () => {
  test.describe("Add To Cart From Product Listing Page", () => {
    test.describe("Select Any Item", () => {
      [
        { name: "Parameterize test 01", data: testBackpack },
        { name: "Parameterize test 02", data: testBikeLight },
      ].forEach(({ name, data }) => {
        test(`${name} : should be able to select ${data.test}`, async ({
          page,
          inventoryPage,
          shoppingCart,
        }) => {
          await inventoryPage.goto();
          await inventoryPage.at();
          await shoppingCart.hasQuantity(0);
          await inventoryPage.addItemToCartIsActive(data.order.itemNames[0]);
          await inventoryPage.addItemToCart(data.order.itemNames[0]);
          await shoppingCart.hasQuantity(1);
          await inventoryPage.removeItemFromCartIsActive(
            data.order.itemNames[0]
          );
        });
      });
    });
  });
});

// <button
//   class="btn btn_primary btn_small btn_inventory "
//   data-test="add-to-cart-sauce-labs-backpack"
//   id="add-to-cart-sauce-labs-backpack"
//   name="add-to-cart-sauce-labs-backpack"
// >
//   Add to cart
// </button>;

// <button
//   class="btn btn_secondary btn_small btn_inventory "
//   data-test="remove-sauce-labs-backpack"
//   id="remove-sauce-labs-backpack"
//   name="remove-sauce-labs-backpack"
// >
//   Remove
// </button>;

// test('basic test', async ({ todoPage, page }) => {

// Our "todoPage" fixture depends on the option.
// todoPage: async ({ page, defaultItem }, use) => {

// https://playwright.dev/docs/test-fixtures#execution-order

// test.describe("Example", () => {
//   test.describe("Add To Cart From Product Listing Page", () => {
//     test.describe("Select Any Item", () => {
//       test("should be able to select backpack", async ({ page }) => {});
//       test("should be able to select bike light", async ({ page }) => {});
//       test("should be able to select bolt t-shirt", async ({ page }) => {});
//       test("should be able to select fleece jacket", async ({ page }) => {});
//       test("should be able to select onesie", async ({ page }) => {});
//       test("should be able to select red t-shirt", async ({ page }) => {});
//     });
//   });
// });
