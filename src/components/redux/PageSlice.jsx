import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    products : [],
}
const productSlice = createSlice({
    name : 'products',
    initialState : initialState,
    reducers : {
    getProduct : (state, {payload}) => {
            state.products = payload
        }
    }
})

export default productSlice.reducer
export const {getProduct} = productSlice.actions