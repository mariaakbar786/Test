import { test as base } from "@playwright/test";
import { APIRequestContext } from "@playwright/test";
import { UserClient } from "../clients/user.client";

type Fixtures = {
  userClient: UserClient;
  authRequest: APIRequestContext;
};

export const test = base.extend<Fixtures>({
  authRequest: async ({ playwright }, use) => {
    const token = process.env.API_TOKEN;

    if (!token) {
      throw new Error("API_TOKEN is not defined");
    }

    const authRequest = await playwright.request.newContext({
      extraHTTPHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    await use(authRequest);

    await authRequest.dispose();
  },

  userClient: async ({ authRequest }, use) => {
    const userClient = new UserClient(authRequest);
    await use(userClient);
  },
});