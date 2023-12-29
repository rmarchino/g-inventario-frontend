import { Navigate } from "react-router-dom";
import useAuth from "../hooks/auth/Authorization";

// eslint-disable-next-line react/prop-types
const ProtectedRoutes = ({ children }) => {
  //const { state } = useLocation();
  const { token } = useAuth();

  return token?.leggend ? children : <Navigate to={"/login"} />;
};

export default ProtectedRoutes;
