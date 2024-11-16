import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import News from "../Component/News";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Loading";

const Route = () => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <Loading />;
  }
  if (user) {
    return <News />;
  }
  return <Navigate state={location.pathname} to="/user/login" />;
};

export default Route;
