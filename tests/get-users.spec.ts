import { test, expect } from "@playwright/test";

test.describe("Users API", () => {
  test("should return users", async ({ request }) => {
    const response = await request.get("/users");

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    console.log(responseBody);

    expect(responseBody).toBeDefined();
  });
  test("should return user by ID", async ({ request }) => {
    const userId = 1;

    const response = await request.get(`/users/${userId}`);

    expect(response.status()).toBe(200);

    expect(response.headers()["content-type"]).toContain("application/json");

    const body = await response.json();

    expect(body.id).toBe(userId);
    expect(body.name).toBeDefined();
    expect(body.email).toBeDefined();
  });

  test("should create a user", async ({ request }) => {
    const payload = {
      name: "John Smith",
      username: "johnsmith",
      email: "john@example.com",
    };

    const response = await request.post("/users", {
      data: payload,
    });

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body.name).toBe(payload.name);
    expect(body.username).toBe(payload.username);
    expect(body.email).toBe(payload.email);
    expect(body.id).toBeDefined();
  });
});
