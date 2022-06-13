import {configureStore} from '@reduxjs/toolkit'
import productReducer from './PageSlice'

export const store = configureStore({
    reducer :{
        products :  productReducer
    }
})