import { createSlice ,PayloadAction} from "@reduxjs/toolkit";

import { RootState } from "./store";

interface PopCatsState {
    value: string
}
  
const initialState:PopCatsState = {
    value: "all",
} 

export const ChoosePopCats = createSlice({
    name: 'category',
    initialState,
    reducers:{
        changeCatTo: (state,action: PayloadAction<string>)=>{
            state.value= action.payload
        } 
    }
})


export const {changeCatTo} = ChoosePopCats.actions

export const chooseCats = (state: RootState) => state.category.value

export default ChoosePopCats.reducer