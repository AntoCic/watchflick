import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
    name: 'post',
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
export const { set } = postSlice.actions

export const postReducer = postSlice.reducer