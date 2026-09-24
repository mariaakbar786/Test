import { APIResponse, expect } from "@playwright/test";
import Ajv from "ajv";

export class ResponseValidator {

  static async validateStatus(
    response: APIResponse,
    expectedStatus: number
  ) {
    expect(response.status()).toBe(expectedStatus);
  }

  static async validateJson(
    response: APIResponse
  ) {
    expect(response.headers()["content-type"]).toContain("application/json");

    const body = await response.json();

    expect(body).toBeDefined();

    return body;
  }

  static async validateSchema(
    body: unknown,
    schema: object
  ) {
    const ajv = new Ajv();
    const validate = ajv.compile(schema);

    const valid = validate(body);

    expect(
      valid,
      `Schema validation failed: ${JSON.stringify(validate.errors)}`
    ).toBe(true);

    return body;
  }
}
