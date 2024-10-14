import React, { useState } from 'react'
import TicketTable from './TicketTable';
import OptionBar from './OptionBar';
import TicketModal from './TicketModal';
import RaiseTicketbuttons from './RaiseTicketbuttons';
function Ticket() {
  const [openPopUp, setPopUp]= useState(false);
  



  const LetRaiseTicket=()=>{
    setPopUp(!openPopUp)
  }
  return ( 
    
 <div className=' shadow-xl md:mt-4 md:mb-2 ml-0 mr-0  bg-[#fdfbfb] overflow-scroll  text-base font-medium    '>
 
   {openPopUp &&
    <div className='fixed inset-0 flex place-items-center justify-end  bg-black bg-opacity-50 z-50' >
      <div className='bg-[#f8f8f8] rounded-lg p-2 shadow-lg md:w-1/3  w-screen float-right h-screen  '><TicketModal  onClose={()=>{LetRaiseTicket()}}/></div>
    </div>
    }
    <div className='justify-items-start place-items-start float-start md:ml-2 mt-4 '> <h1 className='text-lg font-bold text-slate-600 '>Create Ticket For Computerware Issue</h1></div>
   
        <OptionBar/>
        <RaiseTicketbuttons OpenTicket={LetRaiseTicket}/>
        <TicketTable/>
        
        </ div>
  )
}
        
    
  

export default Ticket;

