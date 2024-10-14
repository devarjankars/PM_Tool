// src/ClaimAsset.js

import React ,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { claimDevice } from '../../../Utils/Slice/AssetSlice';
import Modal from './Modal';
import { onOpenandCloseModal } from '../../../Utils/Slice/AssetModal';

const Asset = () => {
  const dispatch = useDispatch();
  const devices = useSelector((state) => state.devices);
  const isOpen=useSelector((state)=>state.modal.isOpen)

  const [selectedDevices, setSelectedDevices] = useState([]);
  

  const handleDeviceChange = (deviceId) => {
    setSelectedDevices((prevSelected) => {
      if (prevSelected.includes(deviceId)) {
        // If the device is already selected, remove it
        return prevSelected.filter((id) => id !== deviceId);
      } else {
        // If not selected, add it to the array
        return [...prevSelected, deviceId];
      }
    });
  };

  const handleClaimDevices = async () => {
    if (selectedDevices.length == 0) {
      alert("Please select at least one device to claim.");
      return;


    }

    dispatch(onOpenandCloseModal())

    

    // try {
    //   const response = await fetch('/api/claim-devices', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ deviceIds: selectedDevices }),
    //   });

    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }

    //   // Dispatch actions to remove claimed devices from the state
    //   selectedDevices.forEach((deviceId) => {
    //     dispatch(claimDevice(deviceId));
    //   });
    //   setSelectedDevices([]);
    // } catch (error) {
    //   console.error('Error claiming devices:', error);
    // }
  };

  return (
    <div className=" text-base overflow-scroll">

      {isOpen &&  <div className='fixed inset-0 flex place-items-end justify-end bg-black bg-opacity-50 z-50' >
        <div className='bg-white rounded-lg p-1  md:w-1/3   md:h-screen'><Modal  data={selectedDevices}  onClose={handleClaimDevices} onClear={()=>{setSelectedDevices([])}}/></div></div>}
    <div className=' text- flex gap-2 '>
      <h1 className="font-bold  mb-10"> Assets Management / My Request</h1>
      { selectedDevices.length !=0 && <div className='mb-4'><button
        onClick={handleClaimDevices}
        className="mb-4 bg-gradient-to-tr from-red-600 to-red-900 text-white py-2 px-4 rounded hover:bg-rose-600  hover:font-semibold transition duration-200"
      >
        Proceed
      </button>
       <button
       onClick={()=>{setSelectedDevices([])}}
       className="md:mb-4 md:ml-2 bg-gradient-to-tr from-gray-500 to-black text-white py-2 px-4 rounded hover:bg-black hover:font-semibold transition duration-200"
     >
       Clear all
     </button>
     {selectedDevices.length > 0 && (
        <p className="m-4  text-black bg-gradient-to-tr from-slate-300 to-blue-200 rounded-lg" >
          You have selected:  {selectedDevices.length} device(s) for claiming.
        </p>
         )}
     </div>

      
}</div>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {devices.length > 0 ? (
          devices.map((device) => (
            <div key={device.id} className="border border-gray-400 rounded-lg shadow-md p-4 flex flex-col justify-between">
              
              <h2 className="text-lg font-semibold">{device.name}</h2>
              
              <input
                type="checkbox"
                checked={selectedDevices.includes(device.id)}
                onChange={() => handleDeviceChange(device.id)}
                className="mt-2"
              />
            </div>
          ))
        ) : (
          <div className="col-span-1 sm:col-span-2 md:col-span-3 text-center">
            <p>No devices available</p>
          </div>
        )}
      </div>
      
     
    </div>
  );
};

export default Asset;
