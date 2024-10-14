import { createSlice } from "@reduxjs/toolkit";






const SliderMgmt= createSlice({
    name:'slider',
    initialState:false,
     

    reducers:{
        HandleSlider:(state,action)=>{
             state=(!state);
        }
    }
})


export const {HandleSlider}=SliderMgmt.actions;

export default SliderMgmt.reducer;