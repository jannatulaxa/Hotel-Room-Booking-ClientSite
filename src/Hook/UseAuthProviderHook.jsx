import { useContext } from "react";
import { AuthContext } from "../Components/Auth/AuthProvider";

const UseAuthProviderHooks = () => {
  const all = useContext(AuthContext);
  return all;
};

export default UseAuthProviderHooks;
