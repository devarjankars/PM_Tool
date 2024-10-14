import React, { useState } from 'react'
import UserIcon from '../../Asset/user.png'

function Navbar({OpenMenu}) {

  const [LogoutOption, setLogoutPopup]= useState(false)



  const HandleProfileClick=()=>{
    setLogoutPopup(!LogoutOption);
    

  }

  const HandleMenuClick=()=>{
    OpenMenu();

  }




  return (
    <div className='  bg-gray-100 shadow-lg  m-1 md:m-2 border-1 flex justify-between  min-w-full items-center'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png" 
      alt="Meun" 
     className='w-[3%] m-2' 
      onClick={HandleMenuClick}
      />
        <h1 className='text-3xl text-gray-600 font-bold'>MedTrix Project Management</h1>
      <img src={UserIcon} alt="Userprofile" 
      className='md:w-[5%] w-[15%]  mr-4 md:mr-8 p-2 hover:ring-offset-pink-300 ' 
      onclick= {HandleProfileClick}/>
    {  LogoutOption && <div className='p-4 w-3 bg-slate-500' ><ul>
      <li>Logout</li>
      </ul>
       </div>}
    </div>
  )
}

export default Navbar
