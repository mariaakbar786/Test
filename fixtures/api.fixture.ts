import { test as base } from "@playwright/test";
import { APIRequestContext } from "@playwright/test";
import { UserClient } from "../clients/user.client";

type Fixtures = {
  userClient: UserClient;
  authRequest: APIRequestContext;
};

export const test = base.extend<Fixtures>({
  authRequest: async ({ playwright }, use) => {
    const token = (
      globalThis as { process?: { env?: Record<string, string | undefined> } }
    ).process?.env?.API_TOKEN;

    if (!token) {
      throw new Error("API_TOKEN is not defined");
    }

    // Create a fresh API context for each test
    const authRequest = await playwright.request.newContext({
      extraHTTPHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    await use(authRequest);

    // Clean up the context after the test
    await authRequest.dispose();
  },

  userClient: async ({ authRequest }, use) => {
    // Create a fresh UserClient for each test
    const userClient = new UserClient(authRequest);

    await use(userClient);
  },
});