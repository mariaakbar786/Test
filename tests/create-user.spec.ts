
import { expect } from "@playwright/test";
import { test } from "../fixtures/api.fixture";
import { validUser } from "../test-data/users";
import Ajv from "ajv";
import { userSchema } from "../schemas/user.schema";

const ajv = new Ajv();
const validateUser = ajv.compile(userSchema);

test.describe("POST Users API", () => {
  test("should create a new user", async ({ userClient }) => {
    const response = await userClient.createUser(validUser);

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body).toBeDefined();

    expect(validateUser(body)).toBe(true);

    expect(body.name).toBe(validUser.name);
    expect(body.username).toBe(validUser.username);
    expect(body.email).toBe(validUser.email);

    expect(body.id).toBeDefined();
  });
});