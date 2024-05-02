import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice ({
    name: "GPT",
    initialState: {
        showGptSearch: false,
    },
    reducers: {
        toggleGPTSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
    },
});


export const {toggleGPTSearchView} = gptSlice.actions;

export default gptSlice.reducer;