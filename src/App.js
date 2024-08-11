import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';
import Posts from './pages/Posts';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? (
      <>
        <Sidebar />
        {element}
      </>
    ) : (
      <Navigate to="/login" />
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path="/users" element={<PrivateRoute element={<Users />} />} />
        <Route path="/posts" element={<PrivateRoute element={<Posts />} />} />
      </Routes>
    </Router>
  );
};

export default App;
