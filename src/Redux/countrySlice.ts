import { createSlice ,PayloadAction} from "@reduxjs/toolkit";

import { RootState } from "./store";

interface CountryState {
    value: string
}
  
const initialState:CountryState = {
    value: "in",
} 

export const CountrySlice = createSlice({
    name: 'country',
    initialState,
    reducers:{
        changeCountryTo: (state,action: PayloadAction<string>)=>{
            state.value= action.payload 
        } 
    }
})


export const {changeCountryTo} = CountrySlice.actions

export const endpoint = (state: RootState) => state.selectedEndpoint.value

export default CountrySlice.reducer 