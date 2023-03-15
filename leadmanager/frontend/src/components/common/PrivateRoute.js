import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const { token, isLoading, isAuthenticated, user } = useSelector(
    (state) => state.auth
  );
  if (isLoading) {
    return <h2>Loading...</h2>;
  } else if (!isAuthenticated) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default PrivateRoute;
