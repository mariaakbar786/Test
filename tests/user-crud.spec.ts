import { expect } from "@playwright/test";
import { test } from "../fixtures/api.fixture";
import { ResponseValidator } from "../utils/response.validator";
import { userSchema } from "../schemas/user.schema";

test.describe("Users CRUD API", () => {

  test("should update a user", async ({ userClient }) => {

    const userId = 1;

    const payload = {
      name: "John Updated",
      username: "johnupdated",
      email: "johnupdated@example.com"
    };

    const response = await userClient.updateUser(userId, payload);

    await ResponseValidator.validateStatus(response, 200);

    const body = await ResponseValidator.validateJson(response);

    await ResponseValidator.validateSchema(body, userSchema);

    expect(body.name).toBe(payload.name);
    expect(body.username).toBe(payload.username);
    expect(body.email).toBe(payload.email);
  });


  test("should partially update a user", async ({ userClient }) => {

    const userId = 1;

    const payload = {
      name: "John Patched"
    };

    const response = await userClient.patchUser(userId, payload);

    await ResponseValidator.validateStatus(response, 200);

    const body = await ResponseValidator.validateJson(response);

    expect(body.name).toBe(payload.name);
  });


  test("should delete a user", async ({ userClient }) => {

    const userId = 1;

    const response = await userClient.deleteUser(userId);

    await ResponseValidator.validateStatus(response, 200);
  });

});