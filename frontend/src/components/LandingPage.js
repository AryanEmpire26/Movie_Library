
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../Landingpage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', formData);
    //   console.log(res.data); 
      navigate('/signin'); 
    } catch (err) {
    //   console.error(err.response.data); 
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
    //   console.log(res.data); 
      navigate('/movielibrary'); 
    } catch (err) {
    //   console.error(err.response.data); 
    }
  };





  return (
    <div className='l'>
    <div className='land'>
      <h2 style={{ color: 'white' }}>Welcome to Movie Library</h2>
      <form onSubmit={handleSignUp}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button className='btn' type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <button className='btn' onClick={() => navigate('/signin')}>Sign In</button></p>
     
    </div>
    </div>
  );
};

export default LandingPage;
