import React, { useState } from "react";
import Sidebar from "./Header/Sidebar"
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import MainFooter from "./Footer/MainFooter";
import { HandleSlider } from "../../Utils/Slice/SliderSlice";
import Resources from "../Pages/ResourceAllocation/Resources";


const DashBoardLayout = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="md:h-[100vh]  md:w-[100vw] md:flex relative   ">
      {/* Sidebar */}
      {/* lg:w-[18.6%] md:w-[20%]  */}
      <div  className={` absolute  h-full lg:relative shadow-md   ${isOpen ? "md:w-[20.6%] " : "md:w-[6%] "} transition-all duration-300  `}>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* Main Content */} 
      <div className={ `w-[100%]   bg-gray-100 p-7 pt-3  ${isOpen ? "w-[80.4%] sm:w-[100%l " : "w-[100%]"}} overflow-scroll`} >
    <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className=" md:w-[100%] md:h-[100%] text-black   pt-2 text-center ">

        
        <Outlet/>
        <Resources/>
      </div >
      <div className="mb-0 md:h-[8%] md:w-[100%] px-0 items-center mx-auto bg-[#ddd8d8] rounded-lg  fixed text-lg text-slate-800">
      <MainFooter/>
      </div>
      
      </div>
    </div>
  );
};

export default DashBoardLayout;
