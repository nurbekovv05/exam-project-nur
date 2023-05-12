import {Apikey} from "../../Aplkey/Apikey";
import axios from "axios";
import {AppDispatch} from "../store";
import {LanguageRec, movieFetching, movieFetchingError, movieFetchingSuccess} from "../Reducers/MovieSlice";
import {DetailError, DetailMovies, DetailSuccess} from "../Reducers/DetailSlice";
import {searchError, SearchLoader, searchSuccess} from "../Reducers/MovieSearchSlice";


export const FetchingMovie = (lan: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(movieFetching())
            const response = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${Apikey}&language=${lan}&page=1`)
            const {data} = await response
            dispatch(movieFetchingSuccess(data.results))
        } catch (err: any) {
            dispatch(movieFetchingError(err.message))
        }
    }
}

export const fetchMovie = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(DetailMovies());
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/?api_key=${Apikey}&language=en-US`
            );
            dispatch(DetailSuccess(response.data));
        } catch (error: any) {
            dispatch(DetailError(error.message));
        }
    };
}

export const LanguageContext = (lan: string) => (dispatch: AppDispatch) => {
    dispatch(LanguageRec(lan))
}

export const fetchSearchMovie = (movieName: any, lan: any) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(SearchLoader())
            const url = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${Apikey}&query=${movieName}&language=${lan}`)
            const {data} = await url
            dispatch(searchSuccess(data.results))
        } catch (e) {
            dispatch(searchError("Error..."))
        }
    }
}
