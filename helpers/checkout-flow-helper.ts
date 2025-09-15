import test, { expect, type Page } from "@playwright/test";
import { CartPage } from "../pages/cart-page";
import { CheckoutCompletePage } from "../pages/checkout-complete-page";
import { CheckoutYourInformationPage } from "../pages/checkout-your-information-page";
import { CheckoutOverviewPage } from "../pages/checkout-overview-page";
import { InventoryItemPage } from "../pages/inventory-item-page";
import { InventoryPage } from "../pages/inventory-page";
import { Order } from "../types/Order";
import { ShoppingCartComponent } from "../components/shopping-cart-component";
import { InventoryItemDescription } from "../enums/inventory-item-description-enum";

export class CheckoutFlowHelper {
  cartPage: CartPage;
  checkoutCompletePage: CheckoutCompletePage;
  checkoutOverviewPage: CheckoutOverviewPage;
  checkoutYourInformationPage: CheckoutYourInformationPage;
  inventoryItemPage: InventoryItemPage;
  inventoryPage: InventoryPage;
  shoppingCart: ShoppingCartComponent;
  private readonly ALL_ITEMS = 6;

  constructor(page: Page) {
    this.cartPage = new CartPage(page);
    this.checkoutCompletePage = new CheckoutCompletePage(page);
    this.checkoutOverviewPage = new CheckoutOverviewPage(page);
    this.checkoutYourInformationPage = new CheckoutYourInformationPage(page);
    this.inventoryItemPage = new InventoryItemPage(page);
    this.inventoryPage = new InventoryPage(page);
    this.shoppingCart = new ShoppingCartComponent(page);
  }

  /**
   * Select any item from the product detail page and checkout
   * - inventory-item.html
   *
   * @param order
   */
  async selectAnyItemFromPDPAndCheckout(order: Order) {
    await test.step("Select Any Item From PDP And Checkout", async () => {
      expect(order.itemNames.length).toBeGreaterThanOrEqual(1);
      await test.step("Inventory", async () => {
        await this.inventoryPage.goto();
        await this.inventoryPage.at();
        await this.inventoryPage.gotoInventoryItem(order.itemNames[0]);
      });
      await test.step("Inventory Item", async () => {
        await this.inventoryItemPage.at(order.itemNames[0]);
        await this.shoppingCart.hasQuantity(0);
        await test.step(`Add To Cart : ${
          InventoryItemDescription[order.itemNames[0]]
        }`, async () => {
          await this.inventoryItemPage.addItemToCart();
          await this.shoppingCart.hasQuantity(1);
        });
        await test.step(`Remove From Cart : ${
          InventoryItemDescription[order.itemNames[0]]
        }`, async () => {
          await this.inventoryItemPage.removeItemFromCart();
          await this.shoppingCart.hasQuantity(0);
        });
        await test.step(`Add To Cart : ${
          InventoryItemDescription[order.itemNames[0]]
        }`, async () => {
          await this.inventoryItemPage.addItemToCart();
          await this.shoppingCart.hasQuantity(1);
        });
        await this.shoppingCart.viewCart();
      });
      await test.step("Cart", async () => {
        await this.cartPage.at();
        await this.cartPage.hasDescription(order.itemNames[0]);
        await this.cartPage.checkout.click();
      });
      await test.step("Checkout: Your Information", async () => {
        await this.checkoutYourInformationPage.at();
        await test.step("Fill Your Information", async () => {
          await this.checkoutYourInformationPage.fillYourInformation(
            order.customerDetails
          );
        });
        await this.checkoutYourInformationPage.continue.click();
      });
      await test.step("Checkout: Overview", async () => {
        await this.checkoutOverviewPage.at();
        await this.checkoutOverviewPage.hasDescription(order.itemNames[0]);
        await this.checkoutOverviewPage.finish.click();
      });
      await test.step("Checkout: Complete!", async () => {
        await this.checkoutCompletePage.at();
      });
    });
  }

  /**
   * Select any two items from the product listing page and checkout
   * - inventory.html
   *
   * @param order
   */
  async selectAnyTwoItemsFromPLPAndCheckout(order: Order) {
    expect(order.itemNames.length).toBeGreaterThanOrEqual(2);
    await test.step("Select Any Two Items From PLP And Checkout", async () => {
      await test.step("Inventory", async () => {
        await this.inventoryPage.goto();
        await this.inventoryPage.at();
        await this.shoppingCart.hasQuantity(0);
        await test.step(`Add To Cart : ${
          InventoryItemDescription[order.itemNames[0]]
        }`, async () => {
          await this.inventoryPage.addItemToCart(order.itemNames[0]);
          await this.shoppingCart.hasQuantity(1);
        });
        await test.step(`Add To Cart : ${
          InventoryItemDescription[order.itemNames[1]]
        }`, async () => {
          await this.inventoryPage.addItemToCart(order.itemNames[1]);
          await this.shoppingCart.hasQuantity(2);
        });
        await this.shoppingCart.viewCart();
      });
      await test.step("Cart", async () => {
        await this.cartPage.at();
        await this.cartPage.hasDescription(order.itemNames[0]);
        await this.cartPage.hasDescription(order.itemNames[1]);
        await this.cartPage.checkout.click();
      });
      await test.step("Checkout: Your Information", async () => {
        await this.checkoutYourInformationPage.at();
        await test.step("Fill Your Information", async () => {
          await this.checkoutYourInformationPage.fillYourInformation(
            order.customerDetails
          );
        });
        await this.checkoutYourInformationPage.continue.click();
      });
      await test.step("Checkout: Overview", async () => {
        await this.checkoutOverviewPage.at();
        await this.checkoutOverviewPage.hasDescription(order.itemNames[0]);
        await this.checkoutOverviewPage.hasDescription(order.itemNames[1]);
        await this.checkoutOverviewPage.finish.click();
      });
      await test.step("Checkout: Complete!", async () => {
        await this.checkoutCompletePage.at();
      });
    });
  }

  /**
   * Select all items from the product listing page and checkout
   * - inventory.html
   *
   * @param order
   */
  async selectAllItemsFromPLPAndCheckout(order: Order) {
    expect(order.itemNames.length).toEqual(this.ALL_ITEMS);
    await test.step("Select All Items From PLP And Checkout", async () => {
      await test.step("Inventory", async () => {
        await this.inventoryPage.goto();
        await this.inventoryPage.at();
        await this.shoppingCart.hasQuantity(0);
        await test.step(`Add To Cart : ${
          InventoryItemDescription[order.itemNames[0]]
        }`, async () => {
          await this.inventoryPage.addItemToCart(order.itemNames[0]);
          await this.shoppingCart.hasQuantity(1);
        });
        await test.step(`Add To Cart : ${
          InventoryItemDescription[order.itemNames[1]]
        }`, async () => {
          await this.inventoryPage.addItemToCart(order.itemNames[1]);
          await this.shoppingCart.hasQuantity(2);
        });
        await test.step(`Add To Cart : ${
          InventoryItemDescription[order.itemNames[2]]
        }`, async () => {
          await this.inventoryPage.addItemToCart(order.itemNames[2]);
          await this.shoppingCart.hasQuantity(3);
        });
        await test.step(`Add To Cart : ${
          InventoryItemDescription[order.itemNames[3]]
        }`, async () => {
          await this.inventoryPage.addItemToCart(order.itemNames[3]);
          await this.shoppingCart.hasQuantity(4);
        });
        await test.step(`Add To Cart : ${
          InventoryItemDescription[order.itemNames[4]]
        }`, async () => {
          await this.inventoryPage.addItemToCart(order.itemNames[4]);
          await this.shoppingCart.hasQuantity(5);
        });
        await test.step(`Add To Cart : ${
          InventoryItemDescription[order.itemNames[5]]
        }`, async () => {
          await this.inventoryPage.addItemToCart(order.itemNames[5]);
          await this.shoppingCart.hasQuantity(6);
        });
        await this.shoppingCart.viewCart();
      });
      await test.step("Cart", async () => {
        await this.cartPage.at();
        await this.cartPage.hasDescription(order.itemNames[0]);
        await this.cartPage.hasDescription(order.itemNames[1]);
        await this.cartPage.hasDescription(order.itemNames[2]);
        await this.cartPage.hasDescription(order.itemNames[3]);
        await this.cartPage.hasDescription(order.itemNames[4]);
        await this.cartPage.hasDescription(order.itemNames[5]);
        await this.cartPage.checkout.click();
      });
      await test.step("Checkout: Your Information", async () => {
        await this.checkoutYourInformationPage.at();
        await test.step("Fill Your Information", async () => {
          await this.checkoutYourInformationPage.fillYourInformation(
            order.customerDetails
          );
        });
        await this.checkoutYourInformationPage.continue.click();
      });
      await test.step("Checkout: Overview", async () => {
        await this.checkoutOverviewPage.at();
        await this.checkoutOverviewPage.hasDescription(order.itemNames[0]);
        await this.checkoutOverviewPage.hasDescription(order.itemNames[1]);
        await this.checkoutOverviewPage.hasDescription(order.itemNames[2]);
        await this.checkoutOverviewPage.hasDescription(order.itemNames[3]);
        await this.checkoutOverviewPage.hasDescription(order.itemNames[4]);
        await this.checkoutOverviewPage.hasDescription(order.itemNames[5]);
        await this.checkoutOverviewPage.finish.click();
      });
      await test.step("Checkout: Complete!", async () => {
        await this.checkoutCompletePage.at();
      });
    });
  }
}
