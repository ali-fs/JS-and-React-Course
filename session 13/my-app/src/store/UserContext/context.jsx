import { createContext } from "react";

export const initialValue = {
  isLoggedIn: false,
  username: "",
  login: () => {},
  logout: () => {},
};
const AuthContext = createContext(initialValue);

export default AuthContext;
