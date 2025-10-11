import { expect, Locator, Page } from "@playwright/test";
import { ProductSortOption } from "../enums/product-sort-option-enum";

export class ProductSortComponent {
  readonly page: Page;
  readonly activeOption: Locator;
  readonly productSort: Locator;
  // readonly selectedOption: Locator;

  constructor(page: Page) {
    this.page = page;
    // this.activeOption = page.locator("span[data-test=active-option]");
    this.activeOption = page.getByTestId("active-option");
    this.productSort = page.getByTestId("product-sort-container");
    // this.selectedOption = page.locator(
    //   "select[data-test=product-sort-container] option:checked"
    // );
  }

  async sortBy(option: ProductSortOption) {
    await this.productSort.selectOption({ label: option });
    // await expect(this.selectedOption).toHaveText(option);
    // await expect(this.activeOption).toHaveText(option);
  }
}

/*
<span class="select_container">
  <span class="active_option" data-test="active-option">
    Name (A to Z)
  </span>
  <select class="product_sort_container" data-test="product-sort-container">
    <option value="az">Name (A to Z)</option>
    <option value="za">Name (Z to A)</option>
    <option value="lohi">Price (low to high)</option>
    <option value="hilo">Price (high to low)</option>
  </select>
</span>;
*/
