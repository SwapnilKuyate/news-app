import { createSlice ,PayloadAction} from "@reduxjs/toolkit";

import { RootState } from "./store";

interface SearchState {
    value: any
}
  
const initialState:SearchState = {
    value: null,
} 

export const SearchSlice = createSlice({
    name: 'search',
    initialState,
    reducers:{
        changeSearchTo: (state,action: PayloadAction<string>)=>{
            state.value= action.payload 
        } 
    }
})


export const {changeSearchTo} = SearchSlice.actions

export const lang = (state: RootState) => state.selectedEndpoint.value

export default SearchSlice.reducer 