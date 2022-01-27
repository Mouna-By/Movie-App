
import { useState } from 'react';
import './App.css';
import AddMovie from './Components/AddMovie';
import FilterByRate from './Components/FilterByRate';
import MovieList from './Components/MovieList';
import NavBar from './Components/NavBar';
import { moviesData } from './Constant/data'

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [inputSearch, setInputSearch] = useState("");
  const[rate,setRate]=useState(1);

  const add = (newMovie)=>{
  return setMovies([...movies,newMovie])
  }

  return (
    <div className="App">
      <NavBar inputSearch={inputSearch} setInputSearch={setInputSearch}/>
      <FilterByRate isRating={false} rate={rate} setRate={setRate}/>
      <AddMovie add={add}/>
      <h1>Movie App</h1>
      <MovieList movie={movies} inputSearch={inputSearch} rating={rate} />
      

    </div>
  );
}

export default App;
