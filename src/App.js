import React, { useState,useEffect} from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isFetch,setIsFetch]=useState(false);
  const[error,setError]=useState(null);

  useEffect(()=>{fetchMoviesHandler();},[])

  function addMovieHandler(movie) {
    console.log(movie);
  }

  async function fetchMoviesHandler() {
    setIsFetch(true);
    setError(null);
    try{
      const response=await fetch('https://swapi.dev/api/films/')
      /*.then((response) => {
        return response.json();
      })*/
      if(!response.ok)
      {
        throw new Error('something went wrong!')
      }
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
        //setIsFetch(false);
        
      //});
    }
    catch(error){
    setError(error.message);
    }
    setIsFetch(false);
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie  onAddMovie={addMovieHandler}/>
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isFetch && movies.length>0 && <MoviesList movies={movies} />}
        {!isFetch && movies.length===0 && <MoviesList movies={movies} />}
        {isFetch && <p>Loading...</p>}
        {!isFetch && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;