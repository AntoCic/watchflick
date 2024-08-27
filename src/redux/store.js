import { configureStore } from '@reduxjs/toolkit'
// import { counterReducer } from './counterSlice'
// import { postReducer } from './postSlice'
import { moviesReducer } from './moviesSlice'

export default configureStore({
    reducer: {
        movies: moviesReducer,
        // counter: counterReducer,
        // post: postReducer
    }
})