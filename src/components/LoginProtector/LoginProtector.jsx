import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginProtector = ({ children }) => {
  const login = sessionStorage.getItem("userName");
  const navigate = useNavigate();
  useEffect(() => {
    if (login) {
      return navigate("/home");
    }
  }, []);
  if (!login) {
    return children;
  } else {
    return "Not allowed";
  }
};

export default LoginProtector;
