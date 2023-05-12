import React, {useEffect} from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {NavLink, useParams} from "react-router-dom";
import {fetchSearchMovie} from "../../store/ActionCreators/ActionCreators";

const MovieSearch = () => {
    const dispatch = useAppDispatch()
    const {movieName} = useParams()
    console.log(movieName)
    const {language} = useAppSelector(s => s.movieSlice)
    const {search, error, loader } = useAppSelector((state)=> state.MovieSearch)
    console.log(search)
    useEffect(()=> {
        dispatch(fetchSearchMovie(movieName, language))
    }, [movieName, language])
    return (
        <div className="container flex flex-wrap pt-[29vh] pl-[50px]">
            {error && <p>{error}</p>}
            { loader && <p>loading...</p>}
            {
                search.length ?
                    search.map(el => (
                        <div className=''>

                            <div className='w-[250px] h-[470px] my-[20px] mx-[10px] border-2 border-blue-800'>
                                <NavLink to={`/movie/${el.id}`}>
                                    <img className='ml-3 mt-[15px] cursor-pointer'
                                         src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`}
                                         alt=""/>
                                    <div className='w-[200px] ml-[16px] mt-[5px]'>
                                        <h1 className='text-xl'>{el.title}</h1>
                                        <p>{el.release_date}</p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    ))
                    : <h1>Фильм который вы искали не найден</h1>
            }
        </div>

    );
};

export default MovieSearch;