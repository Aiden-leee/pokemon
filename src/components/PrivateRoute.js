import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { isLogined } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isLogined) {
      return navigate("/");
    }
  }, [isLogined, navigate]);
  return children;
};

export default PrivateRoute;
