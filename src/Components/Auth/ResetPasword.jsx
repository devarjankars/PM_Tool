import { psAF } from '@mui/material/locale';
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import { Link, useNavigate } from 'react-router-dom';

function ResetPasword() {
    const [pwd,setPwd]= useState( {  p1:false,  p2:false } );
    const [password,setpassword]=useState(   {  pwd1:"",  pwd2:""}  );

 const Navigate= useNavigate();
const handlePassword=(e, name)=>{ setpassword({...password,[name]:e.target.value})}


const HandleResetPassword=(e)=>{
    e.preventDefault();
    if(password.pwd1!=null && password.pwd2 !=null){

          if(password.pwd1===password.pwd2){
            console.log(true)
            alert("Succesfull Updated Password") 
            Navigate('/') 
        }
        else{
            alert("Password Do not Match, Please Enter Valid Password")
        }
    }
    else{
        alert("Please Enter Password in Both Fields")
    }

}

  return (
    <div className='   w-full  h-screen bg-cover bg-hero-pattern '>
    
      <form action="" className= ' absolute bg-white  w-[100%] my-[30%]  mx-auto right-0 left-0  opacity-90 rounded-2xl   border-2 border-slate-300 p-8 md:w-[34%] md:mr-24 md:opacity-82 shadow-2xl  border-3 md:my-[4%]  text-black '>
        <h2 className='text-2xl p-4  m-2 font-sans font-semibold text-slate-900'>Reset Password</h2>
        
       
         <div className='relative'>
            <h3 className='p-1 my-1 font-medium font-sans'> Enter Your New Pssword</h3>
          < input type={pwd.p1==true?'text':'password'}  
           className='p-4 my-2 w-full rounded-2xl border-2  font-semibold  text-black' 
           value={password.pwd1}  placeholder='Password' onChange={(e)=>(handlePassword(e,"pwd1"))}
           required
         />
         <button type='button' className='bg-white absolute right-4 top-16 border-1' onClick={()=>{setPwd({...pwd,["p1"]:!pwd.p1})}} >{password.pwd1===null? <FaEyeSlash/>:<FaEye/>}</button>
        </div>



        <div className='relative'>
            <h3 className='p-1 my-1 font-medium font-sans'>Confirm Password</h3>
          < input type={pwd.p2==true?'text':'password'}  
           className='p-4 my-2 w-full rounded-2xl border-2  font-semibold  text-black' 
           value={password.pwd2}  placeholder='Password' onChange={(e)=>(handlePassword(e,"pwd2"))}
           required
         />

         <button type='button' className='bg-white absolute right-4 top-16 border-1' onClick={()=>{setPwd({...pwd,["p2"]:!pwd.p2})}} >{password.pwd2 ===null? <FaEyeSlash/>: <FaEye/>}</button>
        </div>

        <button type="submit" className='py-4 my-2 bg-black text-white w-full rounded-md hover:bg-slate-900 text-lg font-sans' onClick={HandleResetPassword}> Reset password</button>
      </form>
    </div>
  )
}

export default ResetPasword
