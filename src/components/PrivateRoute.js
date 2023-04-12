import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isLogined } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogined) {
      return navigate("/");
    }
  }, [navigate, isLogined]);
  return children;
};

export default PrivateRoute;
