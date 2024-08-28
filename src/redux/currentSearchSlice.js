import { createSlice } from '@reduxjs/toolkit'

export const currentSearchSlice = createSlice({
    name: 'search',
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
export const { set } = currentSearchSlice.actions

export const currentSearchReducer = currentSearchSlice.reducer