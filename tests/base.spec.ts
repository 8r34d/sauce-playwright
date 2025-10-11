import { InventoryItemDescription } from "../enums/inventory-item-description-enum";
import { InventoryItemName } from "../enums/inventory-item-name-enum";
import { ProductSortOption } from "../enums/product-sort-option-enum";
import { test, expect } from "../fixtures/base-fixture";

/**
 * Base Spec
 *
 * Using Base Fixture
 */

test.describe("Base", () => {
  test.describe("Add To Cart From Product Listing Page", () => {
    test.describe("Select Any Item", () => {
      test("base fixture test", async ({
        inventoryPage,
        products,
        shoppingCart,
      }) => {
        await inventoryPage.goto();
        await inventoryPage.at();
        await shoppingCart.hasQuantity(0);
        await test.step(`${products[0]}`, async () => {
          await inventoryPage.addItemToCart(products[0]);
          await shoppingCart.hasQuantity(1);
        });
        await test.step(`${products[1]}`, async () => {
          await inventoryPage.addItemToCart(products[1]);
          await shoppingCart.hasQuantity(2);
        });
        await test.step(`${products[2]}`, async () => {
          await inventoryPage.addItemToCart(products[2]);
          await shoppingCart.hasQuantity(3);
        });
        await test.step(`${products[3]}`, async () => {
          await inventoryPage.addItemToCart(products[3]);
          await shoppingCart.hasQuantity(4);
        });
        await test.step(`${products[4]}`, async () => {
          await inventoryPage.addItemToCart(products[4]);
          await shoppingCart.hasQuantity(5);
        });
        await test.step(`${products[5]}`, async () => {
          await inventoryPage.addItemToCart(products[5]);
          await shoppingCart.hasQuantity(6);
        });
      });
      test("base fixture test - sort products", async ({
        page,
        inventoryPage,
        productSort,
        shoppingCart,
      }) => {
        await inventoryPage.goto();
        await inventoryPage.at();
        test.step(`check initial sort order : ${ProductSortOption.Az}`, async () => {
          await expect(productSort.activeOption).toHaveText(
            ProductSortOption.Az
          );
          await expect(
            page.getByTestId("inventory-item").first()
          ).toContainText(InventoryItemDescription.Backpack);
          await expect(page.getByTestId("inventory-item").last()).toContainText(
            InventoryItemDescription.RedTShirt
          );
        });
        test.step(`sort by other options : ${ProductSortOption.Za}`, async () => {
          await productSort.sortBy(ProductSortOption.Za);

          await expect(productSort.activeOption).toHaveText(
            ProductSortOption.Za
          );

          await expect(
            page.getByTestId("inventory-item").first()
          ).toContainText(InventoryItemDescription.RedTShirt);
          await expect(page.getByTestId("inventory-item").last()).toContainText(
            InventoryItemDescription.Backpack
          );
        });
        test.step(`sort by other options : ${ProductSortOption.LoHi}`, async () => {
          await productSort.sortBy(ProductSortOption.LoHi);

          await expect(productSort.activeOption).toHaveText(
            ProductSortOption.LoHi
          );

          await expect(
            page.getByTestId("inventory-item").first()
          ).toContainText(InventoryItemDescription.Onesie);
          await expect(page.getByTestId("inventory-item").last()).toContainText(
            InventoryItemDescription.FleeceJacket
          );
        });
        test.step(`sort by other options : ${ProductSortOption.HiLo}`, async () => {
          await productSort.sortBy(ProductSortOption.HiLo);

          await expect(productSort.activeOption).toHaveText(
            ProductSortOption.HiLo
          );

          await expect(
            page.getByTestId("inventory-item").first()
          ).toContainText(InventoryItemDescription.FleeceJacket);
          await expect(page.getByTestId("inventory-item").last()).toContainText(
            InventoryItemDescription.Onesie
          );
        });
        test.step(`select initial sort order : ${ProductSortOption.Az}`, async () => {
          await productSort.sortBy(ProductSortOption.Az);
          await expect(
            page.getByTestId("inventory-item").first()
          ).toContainText(InventoryItemDescription.Backpack);
          await expect(page.getByTestId("inventory-item").last()).toContainText(
            InventoryItemDescription.RedTShirt
          );
        });
        await shoppingCart.hasQuantity(0);
      });
    });
  });
});
