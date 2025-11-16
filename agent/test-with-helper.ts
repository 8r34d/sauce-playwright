import { test } from "./fixtures"; // Import the extended test

test("my test with helper", async ({ commonHelpers }) => {
  await commonHelpers.login("testuser", "testpassword");
  await commonHelpers.selectOptionByValue("select.status-dropdown", "active");
  // ...
});
