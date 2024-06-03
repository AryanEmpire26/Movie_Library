
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../App.css'; 
import '../moviedetails.css'; 

const MovieDetails = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  const API_KEY = process.env.OMDB_API_KEY; 

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await axios.get(`http://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`);
        setMovie(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMovieDetails();
  }, [imdbID]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className='d'>
    <div className="movie-details">
      <h2 style={{ color: 'white' }}>{movie.Title} ({movie.Year})</h2>
      <div className="horizontal-details">
        <img src={movie.Poster} alt={movie.Title} />
        <div className="details">
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Rated:</strong> {movie.Rated}</p>
          <p><strong>Released:</strong> {movie.Released}</p>
          <p><strong>Runtime:</strong> {movie.Runtime}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Writer:</strong> {movie.Writer}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Language:</strong> {movie.Language}</p>
          <p><strong>Country:</strong> {movie.Country}</p>
          <p><strong>Awards:</strong> {movie.Awards}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>Box Office:</strong> {movie.BoxOffice}</p>
          <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
          <p><strong>Metascore:</strong> {movie.Metascore}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MovieDetails;
