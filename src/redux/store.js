import { configureStore } from '@reduxjs/toolkit'

import { moviesReducer } from './moviesSlice'
import { currentSearchReducer } from './currentSearchSlice'

export default configureStore({
    reducer: {
        movies: moviesReducer,
        currentSearch: currentSearchReducer,
    }
})