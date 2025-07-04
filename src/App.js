
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import StickyNavbar from './components/Navbar';
import HomePage from './pages/Home';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Registration from './pages/Registration';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './pages/Login';
import  { Toaster } from 'react-hot-toast';
import StudentList from './pages/StudentList';
import FileUpload from './pages/FileUpload';


const ProtectedRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/gym_frontend" />;
};


const AppRoutes = () => (
 
  <Routes  >
    <Route path="/gym_frontend" element={<HomePage />} />
    <Route path="/gym_frontend/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
    <Route path="/gym_frontend/about" element={<ProtectedRoute element={<About />} />} />
    <Route path="/gym_frontend/registration" element={<ProtectedRoute element={<Registration />} />} />
    <Route path="/gym_frontend/students" element={<ProtectedRoute element={<StudentList />} />} />
    <Route path="/gym_frontend/login" element={<Login />} /> 

    <Route path="/gym_frontend/export" element={< FileUpload />} />
    
  </Routes>

   
);

const App = () => (
  <Router basename="/" >
    <AuthProvider>
    <Toaster />
      <StickyNavbar />
      <AppRoutes />
    </AuthProvider>
  </Router>
);

export default App;
