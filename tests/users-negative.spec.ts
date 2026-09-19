import { test, expect } from "@playwright/test";

test.describe("Users API - Negative Tests", () => {

  // 1. INVALID USER ID

  test("should return 404 for invalid user ID", async ({ request }) => {

    const invalidUserId = 999999;

    const response = await request.get(`/users/${invalidUserId}`);

    expect(response.status()).toBe(404);

  });


  // 2. INVALID USER DATA

  test("should accept invalid user data in JSONPlaceholder", async ({ request }) => {

    const payload = {
      name: "",
      username: "",
      email: "invalid-email"
    };

    const response = await request.post("/users", {
      data: payload
    });

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body.name).toBe(payload.name);
    expect(body.username).toBe(payload.username);
    expect(body.email).toBe(payload.email);

  });


  // 3. MISSING REQUEST BODY

  test("should accept missing request body in JSONPlaceholder", async ({ request }) => {

    const response = await request.post("/users");

    expect(response.status()).toBe(201);

  });

});