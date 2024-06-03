# Movie Library

This project is a Movie Library application built with React, Express, and MongoDB. Users can sign up, log in, search for movies, and view movie details.


## Features

- User authentication (sign up and log in)
- Search for movies using the OMDB API
- View detailed information about movies
- Add movies to a personal list

## Visit the Site
[Visit the Movie-library site](https://665e09e2206c0e322ad5d97e--incandescent-buttercream-dbc7f4.netlify.app/)
(It may work slow as all free components are used)

## Prerequisites

- Node.js
- MongoDB
- An OMDB API key

## Installation

1. Clone the repository:

```sh
git clone https://github.com/your-username/movie-library.git
cd movie-library
```
2. Install server dependencies:
   cd backend
   npm install

3. Install client dependencies:
   cd frontend
   npm install

4. Create a .env file in the server directory with the following content:
   PORT=5000
   MONGO_URI=your_mongo_db_connection_string
   JWT_SECRET=your_jwt_secret

5. Create a .env file in the client directory with the following content:
   OMDB_API_KEY=your_omdb_api_key

## Setting Up MongoDB with MongoDB Compass

1. Download and install MongoDB Compass.
2. Open MongoDB Compass and connect to your MongoDB instance.
3. Create a new database named movie-library.
4. Within the movie-library database, create a new collection named users.
5. Update the MONGO_URI in the .env file in the server directory with your MongoDB connection string. The connection string typically looks like this:
6. MONGO_URI=mongodb://127.0.0.1:27017/movie-library

## Running the Application

1. Start the MongoDB server (if not already running).
2. Start the server
3. Start the client
