import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = Cookies.get('token');
        if (!token) {
          setUser(null);
          return;
        }

        const response = await axios.get('/api/users/me', {
          withCredentials: true,
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log('User data received:', response.data); // Debug log
        setUser(response.data.user);
      } catch (error) {
        console.error('Failed to fetch user:', error);
        Cookies.remove('token');
        setUser(null);
        setError('Failed to load user data');
      }
    };

    fetchUser();
  }, [router]); // Add router as dependency to re-fetch on navigation

  return (
    <div>Navbar</div>
  )
}

export default Navbar