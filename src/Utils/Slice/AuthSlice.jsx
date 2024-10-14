
import { createSlice} from "@reduxjs/toolkit";




const userSlice= createSlice({
Name:'auth',
initialState:{user:null, token:null},
 reducers:{

    setUserInfo:(state,action)=>{
        const {user,accessToken}=action.payload;
        state.user=user,
        state.token=accessToken;

    },
    logout:(state,action)=>{
        state.user=null,
        state.token=null
    },

 },

})

export const {setUserInfo,logout}= userSlice.actions;

export default userSlice.reducer;


