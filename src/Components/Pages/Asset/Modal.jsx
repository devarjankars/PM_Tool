import React, { useState } from 'react'
import { IoMdCloseCircleOutline } from "react-icons/io";

function Modal({ data,onClose, onClear}) {

  const [desc,setDesc]=useState();

    const HandleRequest=()=>{
      //Api Request
      alert(`your Request for Device ID ${data} for ${desc} sent `)
      onClear()
      onClose();


    }
  return (
    
      <div className=' flex flex-col items-center justify-center  backdrop-blur-xl md:mt-14 m-1 '>
      <form action="" className=' text-xl'>
        <h2 className='md:text-xl m-2 font-sans font-medium text-slate-700'>Assests Management</h2>
        <h2 className='left-0 ml-0 text-slate-700'>Reson</h2>
        <input type="text" className='box-border md:box-content border-2 border-gray-900 md:box-decoration-slice  rounded-lg m-2 w-[100%] h-[5rem]'
         placeholder='Description'  onChange={(e)=>{setDesc(e.target.value)}} required/>
        <div className='flex gap-2'>
        <button className='  p-2 md:m-2 md:p-2 bg-gradient-to-tr from-red-600 to-red-900  text-white  border-1 border-solid border-yellow-100 rounded-md hover:bg-black w-1/2 '  onClick={HandleRequest}>Submit</button>
        <button className=' p-2 md:m-2 md:p-2  bg-gray-700   text-white  border-1 border-solid border-yellow-100 rounded-md hover:bg-black w-1/2   '  onClick={onClose}> Close</button>
        </div>
           </form>
        </div>
   
  )
}

export default Modal
