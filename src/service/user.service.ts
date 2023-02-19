import { sheetUsers } from "../data";

// Create User Service
export type CreateUserInputType = {
  id: number;
  email: string;
  password: string;
};

// export const CreateUser = (input: CreateUserInputType) => {};

// Update User Service
export type UpdateUserInputType = {
  id: number;
  email?: string;
  password?: string;
};

// export const UpdateUser = ({ id, ...restInput }: UpdateUserInputType) => {};

export type GetUserByNameInputType = {
  name: string;
};

// Get User by Name Service
export const GetUserByName = (input: GetUserByNameInputType) =>
  sheetUsers.find((item) => item.user === input.name);

// Get Users Service
export const GetUsers = () => {
  return sheetUsers;
};

export type GetUserByIdInputType = {
  id: number;
};

// Get User by Id Service
export const GetUserById = (input: GetUserByIdInputType) =>
  sheetUsers.find((item) => item.id === input.id);
