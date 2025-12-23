import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { AssignmentProvider } from './context/AssignmentContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CreateAssignment from './pages/CreateAssignment';
import PreviewAssignment from './pages/PreviewAssignment';  // ✅ ADD THIS IMPORT
import DownloadAssignment from './pages/DownloadAssignment'; // ✅ ADD THIS IMPORT

function App() {
  return (
    <AuthProvider>
      <AssignmentProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            <Routes>
              {/* Public Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              {/* Protected Routes */}
              <Route path="/dashboard" element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } />
              
              <Route path="/create" element={
                <ProtectedRoute>
                  <CreateAssignment />
                </ProtectedRoute>
              } />
              
              {/* ✅ ADD THESE TWO NEW ROUTES */}
              <Route path="/preview" element={
                <ProtectedRoute>
                  <PreviewAssignment />
                </ProtectedRoute>
              } />
              
              <Route path="/download" element={
                <ProtectedRoute>
                  <DownloadAssignment />
                </ProtectedRoute>
              } />
              
              {/* Default Redirect */}
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              
              {/* Catch all - Redirect to dashboard */}
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </div>
        </Router>
      </AssignmentProvider>
    </AuthProvider>
  );
}

export default App;