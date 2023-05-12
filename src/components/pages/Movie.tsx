import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {FetchingMovie, fetchMovie} from "../../store/ActionCreators/ActionCreators";
import Slider from "react-slick";
import {BsBasketFill} from "react-icons/bs";
import {NavLink, useNavigate} from "react-router-dom";

const Movie = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    const dispatch = useAppDispatch()
    const {loading, movie, error} = useAppSelector((state)=> state.movieSlice)
    const {erroring, detail, loader} = useAppSelector((state)=> state.detailPage)
    const {language} = useAppSelector(s => s.movieSlice)
    const navigate = useNavigate()
    useEffect(()=> {
        dispatch(FetchingMovie(language ))
        dispatch(fetchMovie())
    }, [language])
    return (
        <>
            {error && <p>{error}</p>}
            {loading && <p>loading...</p>}
            <div  className=''>
                <img className='relative' src={`https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/VlHt27nCqOuTnuX6bku8QZapzO.jpg`} alt=""/>
                <div className='absolute  top-[350px] left-[50px]'>
                    <input className='w-[1200px] h-[50px] rounded-[30px] pl-[40px] outline-none text-black'  type="text" placeholder='Найти фильм, сериал, персону...'/>
                    <div className='absolute right-0 top-0'>
                        <button className=' h-[50px] bg-blue-400 rounded-[30px] w-[110px] order-none' >Search</button>
                    </div>
                </div>
            </div>
            <Slider {...settings}>
                            {
                                movie.map(el => (
                                    <div>
                                        <div className='mt-[20px] z-1'>
                                            <div className='ml-[10px]'>
                                                <div className=' my-[20px] mx-[10px] relative'>
                                                 <NavLink to={`/movie/${el.id}`}>
                                                     <img className='ml-8 mt-[15px] cursor-pointer w-[150px] rounded-2xl'
                                                          src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`}
                                                          alt=""/>
                                                 </NavLink>
                                                    <div className='w-[200px] ml-[38px] mt-[28px]'>
                                                        <h1>{el.title}</h1>
                                                        <p>{el.release_date}</p>
                                                    </div>
                                                    <div>
                                                        <div className="vote"
                                                             style={{background: `conic-gradient(yellow,${Math.round(detail.vote_average * 10) * 3.59})`}}>
                                                            <p> 50 %</p>
                                                        </div>
                                                        <div>
                                                            <button onClick={() => navigate("/basket")}
                                                                    className="text-lg  text-2xl text-blue-600 dark:text-blue-500 hover:underline">
                                                                <BsBasketFill/></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                ))
                            }
            </Slider>

        </>
    );
};

export default Movie;