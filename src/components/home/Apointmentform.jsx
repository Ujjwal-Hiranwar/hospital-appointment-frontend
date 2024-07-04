import React, { useState } from 'react'
import Navigation from '../landing page/Navigation'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Appointmentform() {
    let { username } = useParams();
    let [userAppointmentData,setuserAppointmentData] = useState({
      user : username ,
      Doctorname : "",
      Date : "",
      Time : "",
      Status : "Not Fixed",
      Appointmentid : Math.floor(Math.random() * 90000) + 10000,
      Doctorpost : ""
    })
    let handleChange= (e)=>{
      let name = e.target.name;
      setuserAppointmentData({
       ...userAppointmentData,
        [name] : e.target.value
      })
    }
    let handleSubmit=async (e)=>{
      e.preventDefault()
      
      try {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/home/dashboard/appointment`,userAppointmentData)
        .then((response)=>{
          console.log(response.data);
        })
        .catch((err)=>{
          console.log("Error in getting appointment data response")
        })
      } catch (error) {
        console.log("Error in posting appointment data to backend")
      }
      setuserAppointmentData({
        user : username ,
        Doctorname : "",
        Date : "",
        Status : "",
        Appointmentid : "",
        Time : "",
        Doctorpost : ""
      })
    }
  return (
    
    <div>
      <div className="max-w-md mx-96 my-24 w-96 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="doctorName" className="block text-sm font-medium text-gray-700">Doctor Name</label>
          <input type="text" 
          id="doctorName" 
          name="Doctorname" 
          value={userAppointmentData.Doctorname} 
          onChange={handleChange}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm py-2 px-4  bg-gray-100 border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
          <input type="date" id="date"
           name="Date"
            value={userAppointmentData.Date}
            onChange={handleChange}
             className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm py-2 px-4  bg-gray-100 border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
          <input type="time" id="time"
           name="Time"
           onChange={handleChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm py-2 px-4  bg-gray-100 border-gray-300 rounded-md" />
        </div>
        <div className="mb-4">
          <label htmlFor="doctorPost" className="block text-sm font-medium text-gray-700">Doctor Post</label>
          <select id="doctorPost"
            name="Doctorpost"
            
            onChange={handleChange}
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm py-2 px-4  bg-gray-100 border-gray-300 rounded-md">
            <option value="orthopedic"></option>
            <option value="opthamologist">Opthamologist</option>
            <option value="opthamologist">Cardiologists</option>
            <option value="opthamologist">Endocrinologist</option>
            <option value="opthamologist">Neurologist</option>
            <option value="opthamologist">Dermatologist</option>
          </select>
          </div>
        <button type="submit" onClick={()=>{
          alert("Your appointment is sent to Hospital")
          window.location.reload()
        }} className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none my-6 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          Book Appointment
        </button>
      </form>
    </div>
    </div>
  )
}
