import React, { useState, useEffect } from 'react';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';

const AdminPanel: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing session on component mount
  useEffect(() => {
    const checkSession = () => {
      const session = localStorage.getItem('admin_session');
      const sessionExpiry = localStorage.getItem('admin_session_expiry');
      
      if (session && sessionExpiry) {
        const now = new Date().getTime();
        const expiry = parseInt(sessionExpiry);
        
        if (now < expiry) {
          setIsAuthenticated(true);
        } else {
          // Session expired, clear storage
          localStorage.removeItem('admin_session');
          localStorage.removeItem('admin_session_expiry');
        }
      }
      
      setIsLoading(false);
    };

    checkSession();
  }, []);

  const handleLogin = async (credentials: { username: string; password: string }): Promise<boolean> => {
    // Simple authentication - in production, this should be server-side
    const validCredentials = {
      username: 'admin',
      password: 'MubarikGuray2025!'
    };

    if (credentials.username === validCredentials.username && 
        credentials.password === validCredentials.password) {
      
      // Create session with 24-hour expiry
      const sessionToken = btoa(`${credentials.username}:${Date.now()}`);
      const expiryTime = new Date().getTime() + (24 * 60 * 60 * 1000); // 24 hours
      
      localStorage.setItem('admin_session', sessionToken);
      localStorage.setItem('admin_session_expiry', expiryTime.toString());
      
      setIsAuthenticated(true);
      return true;
    }
    
    return false;
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_session');
    localStorage.removeItem('admin_session_expiry');
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-900 to-secondary-900 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p>Loading Admin Panel...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {!isAuthenticated ? (
        <AdminLogin onLogin={handleLogin} />
      ) : (
        <AdminDashboard onLogout={handleLogout} />
      )}
    </>
  );
};

export default AdminPanel;