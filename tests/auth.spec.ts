import { expect } from "@playwright/test";
import { test } from "../fixtures/api.fixture";

test.describe("API Authentication", () => {

  test("should send bearer token", async ({ authRequest }) => {

    const response = await authRequest.get("/users");

    console.log("Status:", response.status());

    expect(response.status()).toBe(200);
  });

});