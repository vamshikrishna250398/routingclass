import { Navigate } from "react-router-dom";

const AuthRoute = ({ jwtToken, children }) => {
  if (jwtToken === undefined) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default AuthRoute;
