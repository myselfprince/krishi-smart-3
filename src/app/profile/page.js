'use client'
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import {toast} from 'react-hot-toast'

const Profile = () => {


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

  return (
    <div>
      <h1>Profile</h1>
      <button
      onClick={logout}
      className='bg-green-600 cursor-pointer w-[500px] h-[100px]'>Logout</button>
    </div>

  
  )
}

export default Profile