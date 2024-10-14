import { createSlice } from "@reduxjs/toolkit";
import Ticket from "../../Components/Pages/Ticket/Ticket";


let initialState={
    Ticket:[
          {
           ID:123,
           Type:`Hardware`,
           severity:'Low',
           description:"Heating Problem",
           Status:'Open',
           Date:'20/04/2024'
       
      
          },
          {
              ID:124,
              Type:`Software`,
              severity:'High',
              description:"App are not working",
              Status:'Open',
              Date:'20/10/2024'
          
         
             },
             {
              ID:153,
              Type:`server`,
              severity:'Low',
              description:"App are not working",
              Status:'Close',
              Date:'30/09/2024'
          
         
             },
             {
              ID:1385,
              Type:`Other`,
              severity:'Medium',
              description:"Bug",
              Status:'Open',
              Date:'20/12/2024'
          
         
             },
             {
              ID:132,
              Type:`Other`,
              severity:'Medium',
              description:"Bug",
              Status:'Open',
              Date:'20/12/2024'
          
         
             },
             {
              ID:131,
              Type:`Other`,
              severity:'Medium',
              description:"Bug",
              Status:'Open',
              Date:'20/12/2024'
          
         
             },
             {
              ID:134,
              Type:`Other`,
              severity:'Medium',
              description:"Bug",
              Status:'Open',
              Date:'20/12/2024'
          
         
             },
             {
              ID:1300,
              Type:`Other`,
              severity:'Medium',
              description:"Bug",
              Status:'Open',
              Date:'20/12/2024'
          
         
             },
             {
              ID:223,
              Type:`Other`,
              severity:'Medium',
              description:"Bug",
              Status:'Open',
              Date:'20/12/2024'
          
         
             },
      ]
    };
    



     const ticketDataSlice= createSlice({
        name:'TicketData,',
        initialState,
        reducers:{
            getTicketData:(state,action)=>{
                return state.Ticket;
            },
            AddData:(state,action)=>{ 
                  state.Ticket.push(action.payload);
            },
            RemoveData:(state,action)=>{ state.filter((ele)=>ele.ID !==action.payload)}
            


        }
     }) 
    


     export const  {getTicketData, AddData, RemoveData}  = ticketDataSlice.actions

     export default ticketDataSlice.reducer
    

