import { proxy } from "valtio";

export const globalState = proxy({
  isOpen: true,
});
