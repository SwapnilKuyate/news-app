import { createSlice ,PayloadAction} from "@reduxjs/toolkit";

import { RootState } from "./store";

interface EndpointState {
    value: string
}
  
const initialState:EndpointState = {
    value: "top-headlines",
} 

export const EndPointSlice = createSlice({
    name: 'selectedEndpoint',
    initialState,
    reducers:{
        changeEndpointTo: (state,action: PayloadAction<string>)=>{
            state.value= action.payload
        } 
    }
})


export const {changeEndpointTo} = EndPointSlice.actions

export const endpoint = (state: RootState) => state.selectedEndpoint.value

export default EndPointSlice.reducer