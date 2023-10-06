import { useContext } from "react";
import AuthContext from "../store/UserContext/context";

const useAuth = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};

export default useAuth;
