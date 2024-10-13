import React from 'react'
import axios from "axios"
import { useState } from 'react'
import Navigation from './Navigation';
import {BASE_URL} from '../../baseURL'
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
       .post(`${BASE_URL}/registerform`,formData)
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
    <div>
    <Navigation />
    <div className="flex items-center justify-center h-5/6 pb-12 bg-white-900">
<div className="relative flex m-6 space-y-8 bg-white shadow-2xl rounded-2xl flex-row space-y-0">
  {/* left side */}
  <div className="flex flex-col justify-start p-8 md:p-14">
    <i>
      <span className="mb-8 text-3xl font-serif font-sans">
        Register for good care from <br></br>specialized doctors!!
      </span>
    </i>
    <div className="pb-2 pt-4">
      <span className="mb-2 text-md ">Username</span>
      <div className="flex flex-row">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 mt-1.5 mb-1.5 rounded-md placeholder:font-light placeholder:text-gray-500"
          name="username"
          value={formData.username}
          onChange={handleChange}
          id="username"
          placeholder="Enter Your Username"
         
        />
      </div>
    </div>
    <div className="py-2">
        <span className="mb-2 text-md">Email</span>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 mt-2 rounded-md placeholder:font-light placeholder:text-gray-500"
          name="email"
          value={formData.email}
          onChange={handleChange}
          id="Email"
          placeholder="Enter Your Mail"
        />
      </div>
    <div className="py-2">
      <span className="mb-2 text-md">Password</span>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        id="pass"
        
        placeholder="Enter Your Password"
        
        className="w-full p-2 border border-gray-300 mt-2 rounded-md placeholder:font-light placeholder:text-gray-500"
      />
    </div>
    <div className="flex justify-between w-full py-4">
      <div className="mr-24">
       
      </div>
      <span className="font-bold text-md hover:text-blue-500 hover:underline cursor-pointer">
        Forgot password
      </span>
    </div>
    <button className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
    onClick={handleSubmit}
    >
      Sign in
    </button>
    <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 inline mr-2"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 48 48"
      >
        <defs>
          <path
            id="a"
            d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
          />
        </defs>
        <clipPath id="b">
          <use xlinkHref="#a" overflow="visible" />
        </clipPath>
        <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
        <path
          clipPath="url(#b)"
          fill="#EA4335"
          d="M0 11l17 13 7-6.1L48 14V0H0z"
        />
        <path
          clipPath="url(#b)"
          fill="#34A853"
          d="M0 37l30-23 7.9 1L48 0v48H0z"
        />+
        <path
          clipPath="url(#b)"
          fill="#4285F4"
          d="M48 48L17 24l-4-3 35-10z"
        />
      </svg>
      Sign in with Google
    </button>
    <div className="text-center text-gray-400">
      Don&apost have an account?
      <span className="font-bold text-black hover:text-blue-500 hover:underline cursor-pointer">
        <a href="/register">Sign up for free</a> 
      </span>
    </div>
  </div>
  {/* right side */}
  <div className="ecommerce">
    <img
      src="https://i.pinimg.com/564x/39/d2/ba/39d2ba363532df6ae3370c1b57eae599.jpg"
      alt="Background"
      className="w-[550px] h-full md:visible hidden rounded-r-2xl md:block object-cover"
    />
  </div>
</div>
</div>

  </div>
  )
}
