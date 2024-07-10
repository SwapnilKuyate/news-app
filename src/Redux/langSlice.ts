import { createSlice ,PayloadAction} from "@reduxjs/toolkit";

import { RootState } from "./store";

interface LangState {
    value: string
}
  
const initialState:LangState = {
    value: "def",
} 

export const LangSlice = createSlice({
    name: 'lang',
    initialState,
    reducers:{
        changeLangTo: (state,action: PayloadAction<string>)=>{
            state.value= action.payload 
        } 
    }
})


export const {changeLangTo} = LangSlice.actions

export const lang = (state: RootState) => state.selectedEndpoint.value

export default LangSlice.reducer 