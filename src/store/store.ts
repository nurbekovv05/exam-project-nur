import {combineReducers, configureStore} from "@reduxjs/toolkit";
import movieSlice from "./Reducers/MovieSlice";
import detailPage from "./Reducers/DetailSlice";
import BasketReducer from "./Reducers/BasketSlice";
import MovieSearch from "./Reducers/MovieSearchSlice";


const rootReducer = combineReducers({
    movieSlice,
    detailPage,
    BasketReducer,
    MovieSearch
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}


export type rootState = ReturnType<typeof rootReducer>
type AppStore =ReturnType<typeof setupStore>
export type AppDispatch =AppStore['dispatch']