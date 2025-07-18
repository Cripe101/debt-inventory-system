import type { IUserPost } from "../interface/IUser";
import apiClient from "./apiClient";

export const addUser = async (data: IUserPost) => {
  const response = await apiClient.post("/users", data);
  return response.data;
};
