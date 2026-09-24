import { expect } from "@playwright/test";
import { test } from "../fixtures/api.fixture";
import { ResponseValidator } from "../utils/response.validator";
import { userSchema } from "../schemas/user.schema";

test.describe("GET Users API", () => {

  test("should get all users", async ({ userClient }) => {

    const response = await userClient.getUsers();

    await ResponseValidator.validateStatus(response, 200);

    const body = await ResponseValidator.validateJson(response);

    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThan(0);

    await ResponseValidator.validateSchema(body[0], userSchema);
  });

});