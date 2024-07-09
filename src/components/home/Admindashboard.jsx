import React, { useEffect, useState } from 'react'
import Dashnavbar from './Dashnavbar'
import Sidebar from './Sidebar'
import axios from 'axios'
import Appointmentcard from './Appointmentcard'
import Doctorform from './Doctorform'
import Doctorcard from './Doctorcard'

export default function Admindashboard() {
    let [viewappointment, setViewAppointment] = useState(false)
    let [adddoctor,setAddDoctor] = useState(false)
    let [doctorform ,setDoctorForm] = useState(false)
    let [pendingrequests,setPendingRequests] = useState([])
try {
    useEffect(()=>{
      axios.get(`/home/dashboard/admin/sendappointmentstoadmin`)
      .then((response)=>{
        setPendingRequests(response.data)
      })
      .catch((err)=>{
             console.log(err)
      })
    },[])
  
} catch (error) {
    
}

  return (
    <div>
      <Dashnavbar admin={true}/>
      <div className='flex flex-row'>
      <Sidebar admin = {true} 
      showaddoc = {setAddDoctor}
      showviewappo = {setViewAppointment}
      showdocform = {setDoctorForm}
      />
      
      {viewappointment == false && adddoctor == false && doctorform ==false ?<p className='text-3xl text-center mt-6 ml-20'>Welcome to Admin DashBoard </p>: null }
      {viewappointment === true ?<>
      <div>
      <p className='text-3xl text-center mt-6 ml-20'>Appointment Requests</p><br />
      <div className='flex flex-col h-[70%] overflow-y-scroll'>
      {viewappointment === true ?
      
        pendingrequests.slice().map((appointment,index)=>(
          <>
          <Appointmentcard 
             admin ={true}
             username = {appointment.user}
             docname={appointment.Doctorname} 
       post={appointment.Doctorpost}
        date={appointment.Date} 
        time={appointment.Time} 
        appointmentid={appointment.Appointmentid}
        
        key={index}
          />
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 w-44 ml-auto mr-24 rounded"
          onClick={()=>{
            try {
              axios.post(`/home/dashboard/admin/acceptappointment`,{
                appointmentid : appointment.Appointmentid,
                username : appointment.user
              }).then((responsee)=>{
               
                alert('Request accepted')
                window.location.reload()
              })
            } catch (error) {
              
            }
          }}>
          Accept
      </button>
      </>
        ))
      
       :  <p className='text-3xl text-center mt-6 ml-20'>No Pending appointments</p>}
       </div>
       </div>
      </>: null}

      
    
      {doctorform === true ?<div className='flex flex-col w-[80%]'>
      <p className='text-3xl text-center ml-10 mt-6 mb-8'>This is doctor form</p>
      <Doctorform />
      
      </div>: null}
      {adddoctor === true ? <div className='flex flex-col w-[80%]'>
      <div className='flex flex-row '>
        <div className='flex-1 w-40 text-3xl text-center mt-6 mb-8'>Your Doctors !!!</div>
       
        <button 
            className="bg-blue-500 hover:bg-blue-700 mr-10 mt-3 mb-3 text-white font-bold px-8 rounded-lg text-2xl shadow-lg transform transition-transform duration-200 hover:scale-105"
            onClick={()=>{
              setAddDoctor(false)
              setViewAppointment(false)
              setDoctorForm(true)
            }}
        >
          
            Add Doctor
        </button>
        </div>
        <div className='p-6 h-[60%] overflow-y-auto ml-14 flex flex-wrap'>
        <Doctorcard image="https://cdn.dribbble.com/userupload/14260686/file/original-072063308809f62c178cd606d18fff9d.jpg?resize=400x300&vertical=center"
                name="Dr. John Doe"
                post="Chief Surgeon"
                degree="MD, PhD"
                 />
                  <Doctorcard image="https://cdn.dribbble.com/userupload/14260686/file/original-072063308809f62c178cd606d18fff9d.jpg?resize=400x300&vertical=center"
                name="Dr. Ujwal Hiranwar"
                post="Chief Surgeon"
                degree="MD, PhD"
                 />
                  <Doctorcard image="https://cdn.dribbble.com/userupload/14260686/file/original-072063308809f62c178cd606d18fff9d.jpg?resize=400x300&vertical=center"
                name="Dr. John Doe"
                post="Chief Surgeon"
                degree="MD, PhD"
                 />
                  <Doctorcard image="https://cdn.dribbble.com/userupload/14260686/file/original-072063308809f62c178cd606d18fff9d.jpg?resize=400x300&vertical=center"
                name="Dr. John Doe"
                post="Chief Surgeon"
                degree="MD, PhD"
                 />
                 </div>
        </div>: null}
      </div>
      
    </div>
  )
}
