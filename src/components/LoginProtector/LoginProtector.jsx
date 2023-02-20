import { Navigate } from "react-router-dom";

const LoginProtector = ({ children }) => {
  const login = sessionStorage.getItem("userName");
  if (login) {
    return <Navigate to="/home"></Navigate>;
  } else {
    return children;
  }
};

export default LoginProtector;
