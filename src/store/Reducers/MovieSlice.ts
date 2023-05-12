import {IMovie} from "../../types/typesMovie";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface MovieSlice {
    loading: boolean
    error: string
    movie: IMovie[]
    language:string
}

const initialState: MovieSlice = {
    loading: false,
    error: '',
    movie: [],
    language: 'en-US'
}


const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        movieFetching(state){
            state.loading = true
        },
        movieFetchingSuccess(state, action: PayloadAction<IMovie[]>){
            state.loading = false
            state.movie = action.payload
            state.error = ''
        },
        movieFetchingError(state, action:  PayloadAction<string>){
            state.loading = false
            state.movie = []
            state.error = action.payload
        },
        LanguageRec(state, action: PayloadAction<string>) {
            state.language = action.payload
        }
    }
})


export const {movieFetching, movieFetchingError, movieFetchingSuccess, LanguageRec} = movieSlice.actions
export default movieSlice.reducer