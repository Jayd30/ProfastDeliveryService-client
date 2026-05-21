import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router';

const PrivateRoutes = ({ children }) => {

  const { user, loading } = useAuth();

  // LOADING
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  // NOT LOGGED IN
  if (!user) {
    return <Navigate to="/register"></Navigate>;
  }

  // LOGGED IN
  return children;
};

export default PrivateRoutes;