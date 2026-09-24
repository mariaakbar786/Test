import { test, expect } from "@playwright/test";
import { negativeUserCases } from "../test-data/negative-users";
import { ResponseValidator } from "../utils/response.validator";

test.describe("Users API - Negative Tests", () => {

  test("should return 404 for invalid user ID", async ({ request }) => {

    const invalidUserId = 999999;

    const response = await request.get(`/users/${invalidUserId}`);

    await ResponseValidator.validateStatus(response, 404);
  });


  for (const testCase of negativeUserCases) {

    test(`should handle ${testCase.name}`, async ({ request }) => {

      const response = await request.post("/users", {
        data: testCase.payload,
      });

      await ResponseValidator.validateStatus(
        response,
        testCase.expectedStatus
      );

      const body = await response.json();

      expect(body).toBeDefined();
    });

  }

});