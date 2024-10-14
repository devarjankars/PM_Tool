import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddData } from '../../../Utils/Slice/TicketSlice';

const TicketModal = ({onClose}) => {

  const dispatch =useDispatch();
  const ticketData= useSelector((state)=>state.TicketData.Ticket)
 
  
  const [ticketInfo, setTicketinfo]= useState({
    issue:"",
    priority:"",
    desc:""


  });
  
  

  const HandleSubmit= async(e)=>{
    e.preventDefault();
    
    const { issue,priority, desc}= ticketInfo
       

       dispatch(AddData({


        ID:(Math.floor(Math.random()*101))+2,
        Type:`${issue}`,
        severity:`${priority}`,
        description: `${desc}`,
        Status:"Open",
        Date:"09/10/2024"



       }))
       console.log(ticketData);
       onClose()

      



   


  }

 
  

const handleDataChanges=( e,name )=>{
  setTicketinfo({...ticketInfo,[name]:e.target.value})
  console.log(ticketInfo);
}

  return (
    
      <div className=' flex  items-center justify-center  backdrop-blur-2xl '>
      <form action="" className=' text-xl'>
        <div className=' flex justify-between'>
        <h2 className=' font-extrabold text-2xl'>Create Issue</h2>
        <button className='float-right bg-neutral-900 text-white md:w-14 top-0 rounded-md w-[16%] hover:bg-gray-500' onClick={onClose}>X</button>
        </div>
        <div  className='md:m-2 md:p-2 w-full  m-4 p-4 '>
        <select name='issue' onChange={(e)=>handleDataChanges(e,"issue")} className='md:w-full w-[60%] border-2 border-gray-300 block rounded-md' required >
                  <option value= "">Select Issue</option>
                   <option value="Hardware">Hardware</option>
                    <option value="Software">Software</option>
                    <option value="Internet Connectivity">Internet Connectivity</option>
                    <option value="Server Access">Server Access</option>
                    <option value="Other">Other</option>
        </select>
        </div>
        <div className='md:m-2 md:p-2  w-full  m-4 p-4'> 
        <select name='priority'  onChange={(e)=>handleDataChanges(e,"priority")} className='md:w-full  w-[60%]  border-2 border-gray-300 block rounded-md' required>
        <option value= ""> Select Priority</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
        </select>
        </div>
        <div className='md:m-2 md:p-2 w-full  m-4 p-4 w-'>
            <h2 className='md:m-2'>Description</h2>
        <input type="text" className='  md:w-full  md:h-[4rem]  border-2 border-gray-300  ' value={ticketInfo.desc}
         placeholder='Description' 
         onChange={(e)=>handleDataChanges(e,"desc")}  required
         />
        </div >
        <button className=' m-2 p-2 md:m-2 md:p-2 bg-gradient-to-tr from-red-600 to-red-900  text-white  border-1 border-solid border-yellow-100 rounded-md hover:bg-red-950 ' onClick={HandleSubmit}>Submit</button>
      
           </form>
        </div>
      
   
  )
}

export default TicketModal
