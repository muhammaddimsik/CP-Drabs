import { useAuth } from "../stores/AuthStore";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: any) => {
  const { accessToken } = useAuth();

  if (!accessToken) return <Navigate to="/drabs/login" replace />;
  return children;
};

export default PrivateRoute;
