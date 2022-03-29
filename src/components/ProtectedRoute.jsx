import React from "react";
import { useAuthContext } from "../hooks";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { myToken } = useAuthContext();

  return myToken ? children : <Navigate to="/login" />;
};

export { ProtectedRoute };
