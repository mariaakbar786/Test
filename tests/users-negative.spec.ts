import { test, expect } from "@playwright/test";

test.describe("Users API - Negative Tests", () => {

 
  // 1. INVALID USER ID

  test.only("should return 404 for invalid user ID", async ({ request }) => {

    const invalidUserId = 999999;

    const response = await request.get(`/users/${invalidUserId}`);

    expect(response.status()).toBe(404);

  });


  // 2. INVALID USER DATA

  test("should reject invalid user data", async ({ request }) => {

    const payload = {
      name: "",
      username: "",
      email: "invalid-email"
    };

    const response = await request.post("/users", {
      data: payload
    });

    expect(response.status()).toBe(400);

  });


  // 3. MISSING REQUEST BODY

  test("should handle missing request body", async ({ request }) => {

    const response = await request.post("/users");

    expect(response.status()).toBe(400);

  });

});
