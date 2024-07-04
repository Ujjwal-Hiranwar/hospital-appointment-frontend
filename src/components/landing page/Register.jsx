import React from 'react'
import axios from "axios"
import { useState } from 'react'
import Navigation from './Navigation';

export default function Register() {
  
  const [formData,setFormData] = useState({
    username : "",
    email : "",
    password : ""
  })
    const handleChange = (e)=>{
      let name = e.target.name;

    setFormData({
        ...formData,
         [name] : e.target.value
      })
    }

    const handleSubmit = (e)=>{
      e.preventDefault();
      try {
        axios
       .post(`${process.env.REACT_APP_BACKEND_URL}/registerform`,formData)
       .then((res)=>{
        console.log("Your data is sent successfully");
       
       })
       .catch((err)=>{
        console.log("error while sending register data to backend")
       })
       setFormData({
          username : "",
          email : "",
          password : ""
       })
       alert("your data is registerd you are redirected to Sign in")
       window.location.href = "/loginform"
      } catch (error) {
        console.log("Error in sending data to backend "+error)
      }
       
      
    }
  return (
    <>
    <Navigation />
    <div className="min-h-screen flex items-center bg-gray-500  justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8 border-2 p-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register Form</h2>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="username" className="sr-only">Username</label>
            <input 
              id="username" 
              name="username" 
              type="text" 
              autoComplete="username" 
              required 
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
              placeholder="Username" 
              value={formData.username} 
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              autoComplete="email" 
              required 
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
              placeholder="Email address" 
              value={formData.email} 
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              autoComplete="current-password" 
              required 
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
              placeholder="Password" 
              value={formData.password} 
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <button 
            type="submit" 
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
  </>
  )
}
/* <div id="successMessage" class="hidden mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-md">
                Registration successful!
            </div> */