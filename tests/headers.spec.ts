import { test, expect } from "@playwright/test";

test.describe("Users API - Headers", () => {
  test("should send request with JSON content type", async ({ request }) => {
    const payload = {
      name: "John Smith",
      username: "johnsmith",
      email: "john@example.com",
    };

    const response = await request.post("/users", {
      headers: {
        "Content-Type": "application/json",
      },
      data: payload,
    });

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body.name).toBe(payload.name);
    expect(body.email).toBe(payload.email);
  });
});
