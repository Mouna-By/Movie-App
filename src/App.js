
import React from 'react';
import './App.css';
import Home from './Components/Home';
import MovieDescrip from './Components/MovieDescrip';
// routing import
import{Routes, Route} from "react-router-dom";

function App() {

  return (
    <div className="App">

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:id" element={<MovieDescrip />}/>
    </Routes> 

    </div>
  );
}

export default App;
