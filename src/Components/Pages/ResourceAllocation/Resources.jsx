import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel,  } from 'react-tabs';
import { Progress, } from "@material-tailwind/react";
import { IoMdInformationCircleOutline } from "react-icons/io";

 

function Resources() {
const [ProgessBar,setProgressbar] = useState(false);




  const HandleProgressInfo=()=>{try {setProgressbar(!ProgessBar); } catch (error) {  console.log(error) }}








  return (
    <div className='font-sans m-2 p-2'>

       
      <div className=''>
        <h2>Tasks Availability</h2>
      </div>
      <div>
      <Tabs>
     <TabList className='md:flex  md:gap-0 md:m-[2rem] '>
      <Tab className='border-2 border-gray-600 rounded-lg md:w-[18vw] md:h-[2.7rem]  justify-center focus:bg-black focus:text-white ease-in-out cursor-pointer default:bg-black default:text-white' >Tech</Tab>
      <Tab className='border-2 border-gray-600 rounded-lg md:w-[18vw] md:h-[2.7rem]  justify-center focus:bg-black focus:text-white ease-in-out cursor-pointer'>Creative</Tab>
      <Tab className='border-2 border-gray-600 rounded-lg md:w-[18vw] md:h-[2.7rem]  justify-center focus:bg-black focus:text-white ease-in-out cursor-pointer'>Content </Tab>
      <Tab className='border-2 border-gray-600 rounded-lg md:w-[18vw] md:h-[2.7rem]  justify-center focus:bg-black focus:text-white ease-in-out cursor-pointer'>PM</Tab>
      </TabList>
      <div className=" flex items-start justify-between md:mb-[rem]">
         <div  className=' flex justify-center items-center ml-2'>
          <label htmlFor="prog">Team Utilization:</label>
        <Progress value={parseInt(Math.random()*50+10)}  id='prog'  color='blue' className='bg-slate-300  md:w-[10vw] md:h-[0.6rem]   text-black ml-1 mr-1  '/>
        <IoMdInformationCircleOutline  onClick={HandleProgressInfo}/>

        </div>
        <div  className=' float-right'>
         <label htmlFor="search-bar" className='font-serif font-medium'>Search:</label>
         <input type="text" name="search-bar"   placeholder='' className='border-2'/>
         </div>
      </div>













      <TabPanel>
      <h2> Tech Team</h2>
    </TabPanel>
    
    <TabPanel>
      <h2> content Team</h2>
    </TabPanel>    


    <TabPanel>
      <h2> Crative Team </h2>
    </TabPanel>


    <TabPanel>
      <h2> PM's </h2>
    </TabPanel>
  </Tabs>
   
  
     </div>


      <div className='content'>

      </div>

    </div>
  )
}

export default Resources
