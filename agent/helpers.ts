import { Page } from "@playwright/test";

export class CommonHelpers {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async selectOptionByValue(buttonSelector: string, dataValue: string) {
    await this.page.click(buttonSelector);
    await this.page.click(`li[role="option"][data-value="${dataValue}"]`);
  }

  async login(username: string, password, string) {
    // ... login logic using this.page ...
  }
}
