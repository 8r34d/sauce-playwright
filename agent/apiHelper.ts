// apiHelpers.ts
import { request } from "@playwright/test";

export const createNewUser = async (userData) => {
  const apiContext = await request.newContext();
  const response = await apiContext.post("https://api.example.com/users", {
    data: userData,
  });
  return response.json();
};
