import { test as base } from "@playwright/test";
import { CommonHelpers } from "./helpers";

// Define the types for your fixtures
export type MyFixtures = {
  commonHelpers: CommonHelpers;
};

// Extend the base test
export const test = base.extend<MyFixtures>({
  // Define the fixture
  commonHelpers: async ({ page }, use) => {
    const helpers = new CommonHelpers(page);
    await use(helpers);
  },
});
