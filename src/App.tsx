import React, {useState} from 'react';
import './App.css';
import Movie from "./components/pages/Movie";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import MovieSearch from "./components/pages/MovieSearch";
import Basket from "./components/pages/Basket";
import DetailPage from "./components/pages/DetailPage";

function App() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
    const dark = () => {
        setIsDarkMode(!isDarkMode)
    }
  return (
    <div className="App">
        <div >
            <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
                <Header dark={dark} isDarkMode={isDarkMode}/>
                <Routes>
                    <Route path={'/'} element={<Movie/>}/>
                    <Route path={'/basket'} element={<Basket/>}/>
                    <Route path={'/movie/:movieId'} element={<DetailPage/>}/>
                    <Route path={"/movies/searchMovie/:movieName"} element={<MovieSearch/>}/>
                </Routes>
            </div>
        </div>
    </div>

);
}

export default App;
