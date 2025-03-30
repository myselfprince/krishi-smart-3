'use client'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import {toast} from 'react-hot-toast'

const Profile = () => {

  const [data, setData] = useState("nothing")

  const router = useRouter()

  const logout = async () => {
    try {
      const response = await axios.get('/api/users/logout');
     
      
      if (response.status === 200) {
        toast.success("Logout successful");
        console.log("Logout successful");
        // localStorage.removeItem('token');
        router.push('/login')
        
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      toast.error("Logout failed");
      console.error("Error during logout:", error.message);
    }
  }

  const getUserDetails = async () => {
    const res = await axios.get('/api/users/me')
    console.log(res.data);
    setData(res.data.data._id)

  }

  return (
    <div>
      <h1>Profile</h1>
      <h2>{data==='nothing'?"data not present":<Link href={`/profile/${data}`}></Link>}</h2>
      <button
      onClick={logout}
      className='bg-green-600 cursor-pointer w-[500px] h-[100px]'>Logout</button>

      <button
      onClick={getUserDetails}
      className='bg-yellow-600 cursor-pointer w-[500px] h-[100px]'>Get User Details</button>
    </div>

  
  )
}

export default Profile