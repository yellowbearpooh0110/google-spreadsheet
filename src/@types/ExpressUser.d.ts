import { SheetUserType } from "../data";

declare global {
  namespace Express {
    interface User extends Omit<SheetUserType, "password"> {}
  }
}
