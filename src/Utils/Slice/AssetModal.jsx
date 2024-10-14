import { createSlice } from "@reduxjs/toolkit";


const initialState={
    isOpen:false,
}

const AssetModal= createSlice({


    name:'modal',
    initialState,

    reducers:{
        onOpenandCloseModal:(state,action)=>{
            if(state.isOpen===true){
                state.isOpen=false;
            }
            else if(state.isOpen===false){
                state.isOpen=true;
            }
        }
    }

        
        

});



export const { onOpenandCloseModal } = AssetModal.actions;

export default AssetModal.reducer;