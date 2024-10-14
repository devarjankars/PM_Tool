import { createSlice } from "@reduxjs/toolkit";

const initialDevices =[

{id:27,	name:"Laptop ",  isActive:1 ,}  ,                                                                            		
{id:28	,name: "Macbook" ,isActive:1 , },
{id:25	,name: "Phone Chargers" ,isActive:1,}  ,
{id:284	,name: "I Phone 15 Pro(256 gb) " ,isActive:1, }  ,
{id:281	,name: "Ipad pro 5G(MHC-007) " ,isActive:1, }  ,
{id:211	,name: "Samsung Galaxy J8 " ,isActive:1, }  ,
{id:20	,name: "PenDrive   " ,isActive:1, } , 
{id:237	,name: "Hard Disk  " ,isActive:1, },
{id:23	,name: "IPAD PRO(MHC-004) " ,isActive:1 ,},
{id:2309	,name: "Hard Disk  " ,isActive:1, },
{id:230	,name: "IPAD PRO(MHC-004) " ,isActive:1 ,}  ,
{id:207	,name: "Hard Disk  " ,isActive:1, },
{id:237	,name: "IPAD PRO(MHC-004) " ,isActive:1 ,}  



];

const devicesSlice= createSlice({
    name:'devices',
    initialState:initialDevices,
    reducers:{
        claimDevice:(state,action)=>{
            return state.filter(device => device.id !== action.payload);
                }
    }
})

export const { claimDevice } = devicesSlice.actions;

export default devicesSlice.reducer;