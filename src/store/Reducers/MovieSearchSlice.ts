
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ISearchMovie} from "../../types/typesMovie";


interface MovieSearch {
    loader: boolean
    error: string
    search: ISearchMovie[]
}


const initialState: MovieSearch ={
    loader: false,
    error: '',
    search: []
}

export const MovieSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        SearchLoader(state){
            state.loader = true
        },
        searchSuccess(state,action: PayloadAction<ISearchMovie[]>) {
            state.loader = false
            state.search = action.payload
        },
        searchError(state, action){
            state.loader= false
            state.error = action.payload
            state.search = []
        }
    }
})


export const {SearchLoader, searchSuccess, searchError } = MovieSlice.actions
export default MovieSlice.reducer