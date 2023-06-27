import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    searchText:""
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        search: (state, action) => {
            state.searchText=action.payload
        },
        clearSearch: (state) => {
            state.searchText=''
        }
    }
})

export const { search, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;