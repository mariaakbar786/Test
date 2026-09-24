import { User } from "../models/user.model";

export type NegativeUserCase = {
  name: string;
  payload?: Partial<User>;
  expectedStatus: number;
};

export const negativeUserCases: NegativeUserCase[] = [
  {
    name: "invalid email",
    payload: {
      name: "Invalid User",
      username: "invaliduser",
      email: "not-an-email",
    },
    expectedStatus: 201,
  },

  {
    name: "empty user data",
    payload: {
      name: "",
      username: "",
      email: "",
    },
    expectedStatus: 201,
  },

  {
    name: "missing request body",
    expectedStatus: 201,
  },
];