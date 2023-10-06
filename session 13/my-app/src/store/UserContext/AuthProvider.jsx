import { useEffect, useState } from "react";
import AuthContext, { initialValue } from "./context";

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(initialValue.isLoggedIn);
  const [username, setUsername] = useState(initialValue.username);

  useEffect(() => {
    const username = localStorage.getItem("username") || "";
    setUsername(username);
    setIsLoggedIn(!!username);
  }, []);

  const login = (username) => {
    localStorage.setItem("username", username);
    setUsername(username);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("username");
    setUsername("");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
