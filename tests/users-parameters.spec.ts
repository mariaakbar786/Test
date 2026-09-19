import { test, expect } from "@playwright/test";

test.describe("Parameters", () => {

  // PATH PARAMETER
  test("get user by ID", async ({ request }) => {

    const userId = 1;

    const response = await request.get(`/users/${userId}`);

    expect(response.status()).toBe(200);

  });


  // ONE QUERY PARAMETER
  test("get user using query parameter", async ({ request }) => {

    const response = await request.get("/users", {
      params: {
        id: 1
      }
    });

    expect(response.status()).toBe(200);

  });


  // MULTIPLE QUERY PARAMETERS
  test("get users using multiple query parameters", async ({ request }) => {

    const response = await request.get("/users", {
      params: {
        id: 1,
        username: "Bret"
      }
    });

    expect(response.status()).toBe(200);

  });

});