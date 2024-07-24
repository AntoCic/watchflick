import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counterSlice'
import { postReducer } from './postSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        post: postReducer
    }
})