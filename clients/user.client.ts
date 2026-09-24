import { APIRequestContext } from "@playwright/test";
import { Logger } from "../utils/logger";
import { ENDPOINTS } from "../constants/endpoints";
import { User } from "../models/user.model";

export class UserClient {

  constructor(private request: APIRequestContext) {}

  async getUsers() {
    Logger.request("GET", ENDPOINTS.USERS);

    const response = await this.request.get(ENDPOINTS.USERS);

    Logger.response(response.status());

    return response;
  }

  async getUserById(userId: number) {
    const endpoint = ENDPOINTS.USER_BY_ID(userId);

    Logger.request("GET", endpoint);

    const response = await this.request.get(endpoint);

    Logger.response(response.status());

    return response;
  }

  async createUser(payload: User) {
    Logger.request("POST", ENDPOINTS.USERS);

    const response = await this.request.post(ENDPOINTS.USERS, {
      data: payload
    });

    Logger.response(response.status());

    return response;
  }

  async updateUser(userId: number, payload: User) {
    const endpoint = ENDPOINTS.USER_BY_ID(userId);

    Logger.request("PUT", endpoint);

    const response = await this.request.put(endpoint, {
      data: payload
    });

    Logger.response(response.status());

    return response;
  }

  async patchUser(userId: number, payload: Partial<User>) {
    const endpoint = ENDPOINTS.USER_BY_ID(userId);

    Logger.request("PATCH", endpoint);

    const response = await this.request.patch(endpoint, {
      data: payload
    });

    Logger.response(response.status());

    return response;
  }

  async deleteUser(userId: number) {
    const endpoint = ENDPOINTS.USER_BY_ID(userId);

    Logger.request("DELETE", endpoint);

    const response = await this.request.delete(endpoint);

    Logger.response(response.status());

    return response;
  }

}
