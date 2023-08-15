import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isFetch,setIsFetch]=useState(false);

  async function fetchMoviesHandler() {
    setIsFetch(true);
    const response=await fetch('https://swapi.dev/api/films/')
      /*.then((response) => {
        return response.json();
      })*/
      const data=await response.json();
      //.then((data) => { setMovies(data.results);
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        
        setMovies(transformedMovies);
        setIsFetch(false);
        
      //});
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isFetch && movies.length>0 && <MoviesList movies={movies} />}
        {!isFetch && movies.length===0 && <MoviesList movies={movies} />}
        {isFetch && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;