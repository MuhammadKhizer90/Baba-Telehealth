// src/ProtectedRoute.js
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';

const ProtectedRoute = ({ element, restrictedRoutes }) => {
  const isAuthenticated = useSelector(state => state.login.token !== null);
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated && restrictedRoutes.includes(location.pathname)) {
      setOpenModal(true);
    }
  }, [isAuthenticated, location.pathname, restrictedRoutes]);

  const handleCloseModal = () => {
    setOpenModal(false);
    // Redirect to login or any other route
    // You can use navigate('/login') if you have useNavigate in your component
  };

  if (!isAuthenticated && restrictedRoutes.includes(location.pathname)) {
    return (
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
      >
        <DialogTitle>Authentication Required</DialogTitle>
        <DialogContent>
          <p>You are not authenticated. Please log in to access this page.
            <h2>Backend is implemented, all work done on local server, Backend is not deployed yet.</h2>
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  return isAuthenticated || !restrictedRoutes.includes(location.pathname) ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
