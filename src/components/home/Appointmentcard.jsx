import React from 'react'

export default function Appointmentcard({ admin=false,username,docname,post="Genral specalist", date, time, appointmentid, status }) {
  return (
     
      <div className="bg-gray-100 shadow-md rounded-md p-4 flex h-24 mx-24 items-center space-x-4 my-4">
      {admin == true ?  <><div className='text-center w-36'>
        <p className="font-semibold ">Patient Name:</p>
        <p>{username}</p>
        
      </div>
      <hr style={{height : '100%',width :'0.5px',backgroundColor : 'black'}}></hr>
      </>: null}
      <div className='text-center w-48'>
        <p className="font-semibold ">Doctor Name:</p>
        <p>{docname}</p>
      </div>
      <hr style={{height : '100%',width :'0.5px',backgroundColor : 'black'}}></hr>
      <div className='text-center w-48'>
        <p className="font-semibold ">Doctor Post:</p>
        <p>{post}</p>
      </div>
      <hr style={{height : '100%',width :'0.5px',backgroundColor : 'black'}}></hr>
      <div className='text-center'>
        <p className="font-semibold">Date:</p>
        <p>{date}</p>
      </div>
      <hr style={{height : '100%',width :'0.5px',backgroundColor : 'black'}}></hr>
      <div className='text-center' >
        <p className="font-semibold">Appointed Time:</p>
        <p>{time}</p>
      </div>
      <hr style={{height : '100%',width :'0.5px',backgroundColor : 'black'}}></hr>
      <div className='text-center w-32'>
        <p className="font-semibold text-center">Appointment ID:</p>
        <p>{appointmentid}</p>
      </div>
      
      {admin == false ? <>
      <hr style={{height : '100%',width :'0.5px',backgroundColor : 'black'}}></hr>
      <div className='text-center w-24'>
        <p className="font-semibold">Status:</p>
        <p>{status}</p>
      </div>
      </> :null}
      
    </div>
    
  )
}
