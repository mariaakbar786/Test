import { test, expect } from "@playwright/test";

test.describe("Users CRUD API", () => {

  test("should update a user", async ({ request }) => {

    const userId = 1;

    const payload = {
      name: "John Updated",
      username: "johnupdated",
      email: "johnupdated@example.com"
    };

    const response = await request.put(`/users/${userId}`, {
      data: payload
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.name).toBe(payload.name);
    expect(body.username).toBe(payload.username);
    expect(body.email).toBe(payload.email);

  });


  test("should partially update a user", async ({ request }) => {

    const userId = 1;

    const payload = {
      name: "John Patched"
    };

    const response = await request.patch(`/users/${userId}`, {
      data: payload
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.name).toBe(payload.name);

  });


  test("should delete a user", async ({ request }) => {

    const userId = 1;

    const response = await request.delete(`/users/${userId}`);

    expect(response.status()).toBe(200);

  });

});