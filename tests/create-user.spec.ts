import { expect } from "@playwright/test";
import { test } from "../fixtures/api.fixture";
import { createUser } from "../test-data/users";
import { ResponseValidator } from "../utils/response.validator";
import { userSchema } from "../schemas/user.schema";

const users = [
  createUser({
    name: "Alice Brown",
    username: "alicebrown",
    email: "alice@example.com",
  }),

  createUser({
    name: "Bob Smith",
    username: "bobsmith",
    email: "bob@example.com",
  }),

  createUser({
    name: "Charlie Davis",
    username: "charliedavis",
    email: "charlie@example.com",
  }),
];

test.describe("POST Users API", () => {

  for (const user of users) {

    test(`should create user: ${user.username}`, async ({ userClient }) => {

      const response = await userClient.createUser(user);

      await ResponseValidator.validateStatus(response, 201);

      const body = await ResponseValidator.validateJson(response);

      await ResponseValidator.validateSchema(body, userSchema);

      expect(body.name).toBe(user.name);
      expect(body.username).toBe(user.username);
      expect(body.email).toBe(user.email);
      expect(body.id).toBeDefined();
    });

  }

});