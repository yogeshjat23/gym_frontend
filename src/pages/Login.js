import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext'; 
import { useNavigate } from 'react-router-dom';
import './Login.css';
const apiUrl = process.env.REACT_APP_API_URL;
const Login = () => {
   const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();  

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`${apiUrl}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Login successful, token:', data.token);  
        setMessage('Login successful!');
      
        localStorage.setItem('token', data.token);  
        
        
     
       login();
     
      } else {
        console.error('Login failed:', data.message);  
        setMessage(data.message || 'Login failed.');
      }
    } catch (error) {
      console.error('Login error:', error);  
      setMessage('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className='log-container'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <button type="submit">Login</button>
        <p>{message}</p>
      </form>
    </div>
  );
};

export default Login;
