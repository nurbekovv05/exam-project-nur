import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export type TBasket = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    quantity?:  string | number | any
}

interface IBasketState {
    basket: TBasket[],
    basketOne: Partial<TBasket>
}

const initialState: IBasketState = {
    basket: [],
    basketOne: {}
}

export const BasketReducer = createSlice({
    name: "BASKET",
    initialState,
    reducers: {
        addToBasket(state, action: PayloadAction<TBasket>) {
            const fount = state.basket.find(e => e.id === action.payload.id)
            if (fount) {
                state.basket = state.basket.map(el => el.id === fount.id ? {...el, quantity: el.quantity + 1} : el)
            } else {
                state.basket = [...state.basket, {...action.payload, quantity: 1}]
            }
        },
    }
})


export default BasketReducer.reducer
export const {addToBasket} = BasketReducer.actions