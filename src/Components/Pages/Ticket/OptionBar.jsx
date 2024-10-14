import { useState } from "react"
import React from 'react'

function OptionBar() {

    const [query , SetQuery]=useState({issue:"", priority:"",active:""})


    const handleChanges=(e)=>{
    SetQuery({...query, [e.target.name]:e.target.value})
    console.log(query);
    

  }
  return (
    <div className="md:flex md:justify-start md:items-start md:gap-4  gap-4 text-base  bg-[#fdfbfb]  md:mb-10 md:mt-20 ">
     
        <select name='issue' onChange={handleChanges} className=' bg-[#fdfbfb]   border-2 rounded-lg border-gray-300 md:w-[16rem] md:h-[2.7rem]   w-screen  m-2 md:m-4'>
                    <option value= "">Select Type</option>
                   <option value="Hardware">Hardware</option>
                    <option value="Software">Software</option>
                    <option value="Internet Connectivity">Internet Connectivity</option>
                    <option value="Server Access">Server Access</option>
                    <option value="Other">Other</option>
        </select>

       

       
            <select name='priority'  onChange={handleChanges} className='bg-[#fdfbfb]   border-2 rounded-lg border-gray-300 md:w-[16rem] md:h-[2.7rem] md:m-4  w-screen m-2' >
                       <option value= "">Select Type</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
        </select>

        

        
         <select name='active'  className=' bg-[#fdfbfb]   border-2 rounded-lg border-gray-300 md:w-[16rem] md:h-[2.7rem] md:m-4 w-screen m-2' onChange={handleChanges}>
              <option value= "Select Type">Select Type</option>
              <option value="Open">Open</option>       
              <option value="Close">Close</option>   

        </select>
        
    

    </div>
  )
}

export default OptionBar
