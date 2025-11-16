import { expect, Locator, Page } from "@playwright/test";

/**
 * Fills an input field and asserts its value.
 * @param locator The Playwright Locator for the input field.
 * @param value The text value to input and assert.
 */
export async function fillAndVerifyInput(
  locator: Locator,
  value: string
): Promise<void> {
  // Use the fill() method to enter text into the input field
  await locator.fill(value);

  // Use the built-in auto-retrying assertion toHaveValue() to verify the input value
  await expect(locator).toHaveValue(value);
}

/**
 * Generic assertion to check the value of an input field.
 * @param locator The Playwright Locator for the input field.
 * @param expectedValue The expected value in the input field.
 */
export async function assertInputValue(
  locator: Locator,
  expectedValue: string | RegExp
): Promise<void> {
  // Playwright's toHaveValue auto-waits until the condition is met
  await expect(locator).toHaveValue(expectedValue);
}

/**
 * A more specific helper if you prefer to pass the page object and a selector directly.
 * @param page The Playwright Page object.
 * @param selector The CSS or other selector for the input field.
 * @param value The value to input and verify.
 */
export async function fillAndVerifyInputBySelector(
  page: Page,
  selector: string,
  value: string
): Promise<void> {
  await page.locator(selector).fill(value);
  await expect(page.locator(selector)).toHaveValue(value);
}
