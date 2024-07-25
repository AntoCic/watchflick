import { createSlice } from '@reduxjs/toolkit'

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        value: []
    },
    reducers: {
        set: (state, action) => {
            state.value = action.payload
        },

    }
})

// Action creators are generated for each case reducer function
export const { set } = moviesSlice.actions

export const moviesReducer = moviesSlice.reducer