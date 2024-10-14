import React from 'react'
import { Link } from 'react-router-dom'







const ForgetPassword = () => {






  return (
    <div className='   w-full h-screen bg-cover bg-hero-pattern '>
    
    <form action="" className= ' absolute bg-white  w-[90%] my-[30%]  mx-auto right-0 left-0  opacity-90 rounded-xl    p-10 md:w-[31%] md:mr-24 md:opacity-82 shadow-2xl   border-slate-300 border-2 md:my-[8%]  text-black  md:[20%]'>
    <div className='flex'> <h2 className=' md:text-2xl  text-lg p-1 m-1 font-sans font-bold text-slate-800'>Forgot Password ?</h2>
        <img src='https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678129-lock-512.png' alt="Lock-img" className='md:w-[10%] md:h-[10%] m-2 w-[17%] h-[15%]'   />
     </div> 
    
      <h4 className='p-2 my-1 font-medium font-sans'>Email</h4>
      <input type="text "  className='p-3 my-3 w-full rounded-2xl border-2 font-semibold' value={""} placeholder='Email ID' />
      
      <Link to={'/'} className=' m-2 py-2   justify-center font-semibold  text-gray-700 underline hover:font-semibold hover:text-black'> Back to Sign In</Link> 

      <button type="submit" className='py-4 my-4 bg-gradient-to-tr from-red-600 to-red-900  text-white w-full rounded-md hover:bg-red-900 font-sans text-lg' onClick={""}>
        Send Reset Link
        </button>
    </form>
  </div>
)
}


  


export default ForgetPassword
