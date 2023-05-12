import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IDetail} from "../../types/typesMovie";


interface IDetailMovies {
    detail: Partial<IDetail>,
    loader: boolean
    erroring: string
}

const initialState: IDetailMovies = {
    detail: {},
    loader: false,
    erroring: ''
}

export const detailPage = createSlice({
    name: "detailPage",
    initialState,
    reducers: {
        DetailMovies(state) {
            state.loader = true;
        },
        DetailSuccess(state, action: PayloadAction<IDetail>) {
            state.loader = false;
            state.detail = action.payload;
            state.erroring = ''
        },
        DetailError(state, action: PayloadAction<string>) {
            state.loader = false;
            state.erroring = action.payload;
        },
    },
});

export const {
    DetailMovies,
    DetailSuccess,
    DetailError,
} = detailPage.actions;

export default detailPage.reducer;