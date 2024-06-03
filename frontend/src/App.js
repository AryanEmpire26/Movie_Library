
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignIn from './components/SignIn';
import LandingPage from './components/LandingPage';
import MovieLibrary from './components/MovieLibrary';
import MovieDetails from './components/MovieDetails';
import Notes from './components/Notes'; 
import './App.css'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/movielibrary" element={<MovieLibrary />} />
        <Route path="/moviedetails/:imdbID" element={<MovieDetails />} />
        <Route path="/notes" element={<Notes />} /> 
      </Routes>
    </Router>
  );
};

export default App;
