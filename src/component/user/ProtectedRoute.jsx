import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

  const auth = sessionStorage.getItem("session data")


  if (!auth) {
    return <Navigate to="/Login" replace />;
  }
  return children;
};

export default ProtectedRoute;