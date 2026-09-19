import { expect } from "@playwright/test";
import { test } from "../fixtures/api.fixture";

test.describe("Users API", () => {

  test("should get users", async ({ userClient }) => {
    const response = await userClient.getUsers();

    expect(response.status()).toBe(200);
  });

  test("should get user by ID", async ({ userClient }) => {
    const userId = 1;

    const response = await userClient.getUserById(userId);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(userId);
  });

  test("should create user", async ({ userClient }) => {
    const payload = {
      name: "John Smith",
      username: "johnsmith",
      email: "john@example.com",
    };

    const response = await userClient.createUser(payload);

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body.name).toBe(payload.name);
    expect(body.email).toBe(payload.email);
  });

});