import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from 'hooks';
import PropTypes from 'prop-types';

const RedirectRoute = ({ children }) => {
  const { myToken } = useAuthContext();

  return myToken ? <Navigate to="/explore" replace /> : children;
};

RedirectRoute.propTypes = {
  children: PropTypes.element.isRequired
};

export { RedirectRoute };
