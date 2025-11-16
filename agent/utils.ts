// utils.ts
export function formatData(data: string): string {
  return data.trim().toUpperCase();
}

// In your test file
import { test } from "@playwright/test";
import { formatData } from "./utils";

test("use standalone helper", async ({ page }) => {
  const data = "  some text  ";
  const formatted = formatData(data);
  // ... use formatted data
});
