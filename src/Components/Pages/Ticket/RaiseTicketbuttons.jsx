import React from 'react'

function RaiseTicketbuttons({OpenTicket}) {
  return (
    <div className=' md:flex md:flex-row-reverse justify-between  md:mb-0 '>
        
            <button className=' bg-gradient-to-tr from-gray-500 to-red-700 text-slate-50 md:w-[12%]  hover:bg-black  font-serif rounded-lg justify-center mr-4  md:h-[2rem] '
              onClick={OpenTicket}>+Create Issue
             </button>
             <h1 className='ml-2 text-xl font-semibold'>Issue Raised</h1>
        </div>
  )
}

export default RaiseTicketbuttons
