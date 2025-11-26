import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    wishlist: 0,
    cartId: []
}

export const cartSlicer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increment: (state, actions) => {
            const find = state.cartId.find(item => item === actions.payload)
            if (find === undefined) {
                state.value += 1,
                    state.cartId.push(actions.payload)
            }

        },
        decrement: (state) => {
            state.value = Math.max(0, state.value - 1)
        },
        removeFromCart: (state, actions) => {
            state.cartId = state.cartId.filter(item => item !== actions.payload)
            state.value = Math.max(0, state.value - 1)
        }
    }
})

export const { increment, decrement, removeFromCart } = cartSlicer.actions
export default cartSlicer.reducer;