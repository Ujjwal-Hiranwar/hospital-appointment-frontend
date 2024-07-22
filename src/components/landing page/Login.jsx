import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Navigation from './Navigation'
import {BASE_URL} from '../../baseURL'

export default function Login(props) {
 
    let [admin,setAdmin] = useState(false)
    let [adminid,setAdminID] = useState('')
    let [user,setuser] = useState('')
    let [pass,setpass] = useState('')
    console.log(`the base url is ${BASE_URL}`)
    const handleclick =async (e)=>{
        e.preventDefault()
        try{

            axios.post(`${BASE_URL}/loginform`,{
              username : user,
              password: pass,
              adminid : adminid 
            })
            .then((response)=>{
              if(response.data.Loggedin && response.data.isAdmin){
                window.location.href = `/home/dashboard/admin/${response.data.username}`
              }
              
              else if(response.data.Loggedin){
                window.location.href = `/home/dashboard/${response.data.username}`
              }
              else{
                alert(response.data.message);
              }
            })
            .catch((err)=>{
              console.log("error in login form"+err);
            })
        
        }
        catch(err){
            console.log("not able to send response in backend :"+err)
        }  
    }
  return (
    <div>
      <Navigation />

       <div className="min-h-screen flex items-center justify-center bg-gray-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 border-2 border-black-900 rounded-lg p-16">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{admin===true ?<p>Admin Login</p> :<p>Patient Login</p>}</h2>
        </div>
      
        <form className="mt-8 space-y-6" onSubmit={handleclick}>
          <div className="rounded-md shadow-sm -space-y-px">
            {admin === true ? <div>
              <label htmlFor="admin" className="sr-only">Admin</label>
              <input
                id="admin"
                name="adminid"
                type="text"
                value={adminid}
                required
                onChange={(e)=>{
                    setAdminID(e.target.value)
                }}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Admin ID"
              />
            </div>:null }
          
            <div>
              
              <label htmlFor="user" className="sr-only">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                value={user}
                required
                onChange={(e)=>{
                    setuser(e.target.value)
                }}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={pass}
                required
                onChange={(e)=>{
                 setpass(e.target.value)   ;
                }}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />

            </div>
           
          </div>  
          <button type="button" onClick={()=>{
            if(admin === false){setAdmin(true)}
            else{setAdmin(false)}
             
          }} className='text-md text-center m-4 ml-24 hover:text-blue-900'>{admin===true ?<p>Login as a patient??</p> : <p>Login as a Admin??</p>}</button>
          <div>
            <button 
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in   
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
  
}

