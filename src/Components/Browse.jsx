import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Auth/Login';
import Error from './ErrorHandling/Error';
import Asset from './Pages/Asset/Asset';
import ForgetPassword from './Auth/ForgetPassword';
import ResetPasword from './Auth/ResetPasword';
import CalendarComponent from './Pages/CalendarView/CalendarComponent';
import DashBoardLayout from './Layout/DashBoardLayout';
import Ticket from './Pages/Ticket/Ticket'; 

function Browse (){

const appRoutes= createBrowserRouter([
    {
  
        path:'/',
        element:<Login/>, 
        errorElement:<>Something Went Wrong</>
      },
      {
      path:'/dashboard',
      element:<DashBoardLayout/>,
      children:[
        {
          path:'assets',
          element: <Asset/>
         },
         {
          path:'Calendarview',
          element: <CalendarComponent/>
         },
         {
          path:'ticket',
          element:<Ticket/>
         },
         {
          errorElement:'error',
          element:<>...Something went wrong</>
         }
         
        ]
     },
      
   

    {
     path:'/forgotpassword',
    element:<ForgetPassword/>
    },
    {
    path:'/resetPassword',
    element:<ResetPasword/>
   }
])


return (<RouterProvider router={appRoutes} /> )
}

export default Browse;
