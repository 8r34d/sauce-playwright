import { test as setup, expect } from "@playwright/test";
import path from "path";

const authFile = path.join(__dirname, "../playwright/.auth/user.json");

const { USERNAME, PASSWORD, BASE_URL } = process.env;

setup("authenticate", async ({ page }) => {
  console.log(`Base URL: ${BASE_URL}`);
  await page.goto("/");
  await expect(page).toHaveTitle(/Swag Labs/);
  await page.getByTestId("username").fill(USERNAME!);
  await page.getByTestId("password").fill(PASSWORD!);
  await page.getByTestId("login-button").click();
  await page.context().storageState({ path: authFile });
});
