import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Loader from '../common/Loader';

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { user, isAuthenticated, loading, getUserRole } = useAuth();
  const location = useLocation();

  // Show loader while checking authentication
  if (loading) {
    return <Loader text="Checking authentication..." />;
  }

  // If not authenticated, redirect to login with return url
  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // If roles are specified, check if user has required role
  if (allowedRoles.length > 0 && user) {
    const userRole = getUserRole();
    const hasRequiredRole = allowedRoles.includes(userRole);
    
    if (!hasRequiredRole) {
      // Redirect to unauthorized page or dashboard
      return <Navigate to="/unauthorized" replace />;
    }
  }

  // User is authenticated and has required role (if any)
  return children;
};

export default ProtectedRoute;