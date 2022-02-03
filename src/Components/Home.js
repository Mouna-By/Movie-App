import React, {useState} from 'react';

import AddMovie from '../Components/AddMovie';
import MovieList from '../Components/MovieList';
import FilterByRate from '../Components/FilterByRate';
import NavBar from '../Components/NavBar';
import { moviesData } from '../Constant/data';

function Home() {
    const [movies, setMovies] = useState(moviesData);
    const [inputSearch, setInputSearch] = useState("");
    const[rate,setRate]=useState(1);

    const add = (newMovie)=>{
    return setMovies([...movies,newMovie])
    }
    return( 
    <div>
        
        <NavBar inputSearch={inputSearch} setInputSearch={setInputSearch}/>
        <div style={{}}>
        <FilterByRate isRating={false} rate={rate} setRate={setRate}/>
        </div>
        <AddMovie add={add}/>
    
        <MovieList movie={movies} inputSearch={inputSearch} rating={rate} />

    </div>
    );
}

export default Home;
