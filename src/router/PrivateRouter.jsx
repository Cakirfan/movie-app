import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContex } from "../context/AuthContext";

const PrivateRouter = () => {
  const { currentUser } = useContext(AuthContex);
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
