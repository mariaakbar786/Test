import { User } from "../models/user.model";

export const validUser: User = {
  name: "John Smith",
  username: "johnsmith",
  email: "john@example.com",
};

export function createUser(overrides: Partial<User> = {}): User {
  return {
    name: "John Smith",
    username: "johnsmith",
    email: "john@example.com",
    ...overrides,
  };
}