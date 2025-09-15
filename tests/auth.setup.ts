import { test as setup, expect } from "@playwright/test";
import path from "path";

const authFile = path.join(__dirname, "../playwright/.auth/user.json");

setup("authenticate", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Swag Labs/);
  await page.getByTestId("username").fill(process.env.USERNAME!);
  await page.getByTestId("password").fill(process.env.PASSWORD!);
  await page.getByTestId("login-button").click();
  await page.context().storageState({ path: authFile });
});
