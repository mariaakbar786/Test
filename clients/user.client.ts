
import { APIRequestContext } from "@playwright/test";
import { Logger } from "../utils/logger";

export class UserClient {

  constructor(private request: APIRequestContext) {}

  async getUsers() {
    Logger.request("GET", "/users");

    const response = await this.request.get("/users");

    Logger.response(response.status());

    return response;
  }

  async getUserById(userId: number) {
    Logger.request("GET", `/users/${userId}`);

    const response = await this.request.get(`/users/${userId}`);

    Logger.response(response.status());

    return response;
  }

  async createUser(payload: object) {
    Logger.request("POST", "/users");

    const response = await this.request.post("/users", {
      data: payload
    });

    Logger.response(response.status());

    return response;
  }

  async updateUser(userId: number, payload: object) {
    Logger.request("PUT", `/users/${userId}`);

    const response = await this.request.put(`/users/${userId}`, {
      data: payload
    });

    Logger.response(response.status());

    return response;
  }

  async patchUser(userId: number, payload: object) {
    Logger.request("PATCH", `/users/${userId}`);

    const response = await this.request.patch(`/users/${userId}`, {
      data: payload
    });

    Logger.response(response.status());

    return response;
  }

  async deleteUser(userId: number) {
    Logger.request("DELETE", `/users/${userId}`);

    const response = await this.request.delete(`/users/${userId}`);

    Logger.response(response.status());

    return response;
  }

}

