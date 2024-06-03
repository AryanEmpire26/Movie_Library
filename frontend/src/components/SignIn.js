
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css'; 
import '../signin.css'; 

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      console.log(res.data);
      localStorage.setItem('token', res.data.token); 
      navigate('/movielibrary');
    } catch (err) {
      
        alert('Invalid Credentials');
    }
  };

  return (
    <div className='s'>
    <div className="form-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button className='btn' type="submit">Sign In</button>
      </form>
      <div className="form-footer">
        <p>
          Don't have an account? <a href="/">Sign Up</a>
        </p>
      </div>
    </div>
    </div>
  );
};

export default SignIn;
