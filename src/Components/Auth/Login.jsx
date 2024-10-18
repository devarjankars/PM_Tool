import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
 import { FaEye, FaEyeSlash} from 'react-icons/fa'; 
import axios from 'axios';
 





function Login() {
//input field make it required field after testing
const [ Remb, setRemb ]=useState(false);

 const [User , setUser]= useState({
  username:"",
  Password:"",
  showpwd:false,
 })



 
 
 const Navigate=useNavigate();



  const HanndleFrom = async(e)=>{
    try {
      e.preventDefault();
      
      
      if(Remb=== true){localStorage.setItem("user", JSON.stringify(User))}
  
      Navigate('dashboard/resourceAllocation')
  
    } catch (error) {
        Navigate('/error');
      
    }
   
  
    

    setUser({
      userName:"",
      Password:"",
      showpwd:false,
     })

  }
  const HandleChanges=(e,inputName)=>{
    
    console.log(e.target.name);
    
  const value =e.target.value;

  setUser({...User,[inputName]:value})
   
  console.log( User);


  }

  useEffect(  ()=>{
    const userInfo=(localStorage.getItem("user"))
    if(userInfo!==null) {
      setUser({
        userName:userInfo.userName,
        Password:userInfo.Password,
        showpwd:false,
       })
    }


  },[])


 const  HandleCheckboxChanges =()=>{
  console.log('Debug the handle checkbox fun')
  setRemb(!Remb)


 }








  return (
    <div className='   w-full  h-screen bg-cover bg-hero-pattern '>
    
      <form action="" className= ' absolute bg-white  w-[100%] my-[30%]  mx-auto right-0 left-0  opacity-90 rounded-2xl   border-2 border-slate-300 p-8 md:w-[34%] md:mr-24 md:opacity-82 shadow-2xl  border-3 md:my-[4%]  text-black '>
        <h2 className='text-2xl p-4  m-2 font-sans font-semibold text-slate-800'>Project Management Portal</h2>
        
        <input type="text "  className='p-4 my-4 w-full rounded-2xl border-2 font-semibold' value={User.username} placeholder='Email or Username' onChange={(e)=>{HandleChanges(e,"username")}}/>

         <div className='relative'>
          < input type={User.showpwd?'text':'password'}  
           className='p-4 my-2 w-full rounded-2xl border-2  font-semibold  text-black' 
           value={User.Password}  placeholder='Password' onChange={(e)=>HandleChanges(e,"Password")}
         />
         <button type='button' className='bg-white absolute right-4 top-7 border-1' onClick={()=>{setUser({...User,showpwd:!User.showpwd})}} >{User.showpwd ?<FaEyeSlash/>:<FaEye/>}</button>
        </div>

        <Link to={'/forgotpassword'} className=' my-0 py-2   text-red-600  font-medium float-right hover:text-red-400'>Forgot Password?</Link> 
       <div className='flex gap-4 mt-12 mx-2 text-slate-800 font-medium'>
        <input type="checkbox"  onClick={HandleCheckboxChanges} 
        /> <h3 className='text-black font-sans text-lg' >Remember Me </h3></div>
        <button type="submit" className='py-4 my-2 bg-gradient-to-tr from-red-600 to-red-900 text-white w-full rounded-md hover:bg-slate-900 text-lg font-sans' onClick={HanndleFrom}>Sign In</button>
      </form>
    </div>
  )
}

<div>
</div>
export default Login;
