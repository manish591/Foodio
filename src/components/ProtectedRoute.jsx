import React from "react";
import { useAuthContext } from "../hooks";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { myToken } = useAuthContext();
  const location = useLocation();

  return myToken ? (
    children
  ) : (
    <Navigate to="/login" replace={true} state={location.pathname} />
  );
};

export { ProtectedRoute };
