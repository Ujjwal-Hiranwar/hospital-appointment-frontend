import React from 'react'
import Appointmentcard from './Appointmentcard'
import { Link } from 'react-router-dom'

export default function Sidebar(props) {
  return (
    <>
    <div className="flex bg-gray-100 ">
      
        <div className="flex flex-col h-screen">
          {/* Sidebar component */}
          <div className="bg-gray-800 p-4 w-72">
            
            <div className="flex items-center space-x-4">
              {props.admin == true ? <>
                <img className="h-12 w-12 rounded-full" src="https://via.placeholder.com/150" alt="User" />
              <div className="text-white">
                <p className="text-lg font-medium">Admin</p>
                
              </div>
              </> :<><img className="h-12 w-12 rounded-full" src="https://via.placeholder.com/150" alt="User" />
              <div className="text-white">
                <p className="text-lg font-medium">{props.username}</p>
                <p className="text-sm">{props.emailid}</p>
              </div></>}
              
            </div>
          </div>
          {/* Sidebar navigation */}
          
          <div className="bg-gray-700 py-4 flex-grow w-72">
            <nav className="space-y-1">
              {props.admin === true ?<><button onClick={()=>{
                 props.showviewappo(true)
                 props.showaddoc(false)
                 props.showdocform(false)
              }} className="text-gray-300 hover:bg-gray-600 hover:text-white px-4 mt-4 py-2 rounded-md block w-full">View Appointments</button>
              <button onClick={()=>{
               props.showviewappo(false)
               props.showaddoc(true)
               props.showdocform(false)
              }} className="text-gray-300 hover:bg-gray-600 hover:text-white px-4 mt-4 py-2 rounded-md block w-full">Add Doctor</button>
              
              </>
              :<>  <button onClick={()=>{
                props.showappointment(true)
                props.showappointmentform(false)
                props.showdoc(false)
                props.showcancelappointment(false)
              }} className="text-gray-300 hover:bg-gray-600 hover:text-white px-4 mt-4 py-2 rounded-md block w-full">Your Appointments</button>
              <button onClick={()=>{
                props.showappointmentform(true)
                props.showappointment(false)
                props.showdoc(false)
                props.showcancelappointment(false)
              }} className="text-gray-300 hover:bg-gray-600 hover:text-white px-4 py-2 rounded-md block w-full">Make Appointment</button>
             
             <button onClick={()=>{
                props.showcancelappointment(true)
                props.showappointmentform(false)
                props.showappointment(false)
                props.showdoc(false)
             }} className="text-gray-300 hover:bg-gray-600 hover:text-white px-4 py-2 rounded-md block w-full">Cancel Appointment</button>
             <button 
             onClick={()=>{
              props.showdoc(true)
              props.showcancelappointment(false)
                props.showappointmentform(false)
                props.showappointment(false)
             }}
             className="text-gray-300 hover:bg-gray-600 hover:text-white px-4 py-2 rounded-md block w-full">Our Doctors</button>  </>}
            
            </nav>
          </div>
        </div>

        
    </div>
   
    </>
  )
}
