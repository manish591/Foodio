import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from 'hooks';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
  const { myToken } = useAuthContext();
  const location = useLocation();

  return myToken ? children : <Navigate to="/login" replace state={location.pathname} />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired
};

export { ProtectedRoute };
