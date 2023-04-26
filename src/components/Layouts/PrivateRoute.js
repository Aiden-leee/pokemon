import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const uid = window.localStorage.getItem("uid");
    if (!uid) {
      return navigate("/");
    }
  }, [navigate]);
  return children;
};

export default PrivateRoute;
