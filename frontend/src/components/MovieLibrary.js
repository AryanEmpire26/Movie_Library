
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css'; 
import '../ml.css'; 

const MovieLibrary = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const API_KEY = process.env.OMDB_API_KEY;  

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
      if (res.data.Response === "True") {
        setMovies(res.data.Search);
      } else {
        setMovies([]);
         alert('No movies found');
        
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleMovieClick = (imdbID) => {
    navigate(`/moviedetails/${imdbID}`);
  };

  return (
    <div className='m'>
    <div className="library-container">
      <h2>Search for Movies</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter movie title"
        />
        <button className='btn' type="submit">Search</button>
      </form>
      <Link to="/notes" className="notes-link">Go to Movie List</Link>
      <div className="movie-list">
        {movies && movies.map((movie) => (
          <div key={movie.imdbID} className="movie-item" onClick={() => handleMovieClick(movie.imdbID)}>
            <img src={movie.Poster} alt={movie.Title} />
            <p>{movie.Title} ({movie.Year})</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default MovieLibrary;
