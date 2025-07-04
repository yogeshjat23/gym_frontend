
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
  return isAuthenticated ? element : <Navigate to="/gym_frontend_proj" />;
};


const AppRoutes = () => (
 
  <Routes  >
    <Route path="/gym_frontend_proj" element={<HomePage />} />
    <Route path="/gym_frontend_proj/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
    <Route path="/gym_frontend_proj/about" element={<ProtectedRoute element={<About />} />} />
    <Route path="/gym_frontend_proj/registration" element={<ProtectedRoute element={<Registration />} />} />
    <Route path="/gym_frontend_proj/students" element={<ProtectedRoute element={<StudentList />} />} />
    <Route path="/gym_frontend_proj/login" element={<Login />} /> 

    <Route path="/gym_frontend_proj/export" element={< FileUpload />} />
    
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
