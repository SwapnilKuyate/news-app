import { createSlice ,PayloadAction} from "@reduxjs/toolkit";

import { RootState } from "./store";

interface SortByState {
    value: string
}
  
const initialState:SortByState = {
    value: "publishedAt",
} 

export const SortBySlice = createSlice({
    name: 'sortBy',
    initialState,
    reducers:{
        changeSortByTo: (state,action: PayloadAction<string>)=>{
            state.value= action.payload 
        } 
    }
})


export const {changeSortByTo} = SortBySlice.actions

export const endpoint = (state: RootState) => state.selectedEndpoint.value

export default SortBySlice.reducer 