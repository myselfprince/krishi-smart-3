// 'use client'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { useRouter } from 'next/navigation'
// import Link from 'next/link'
// import Image from 'next/image'

// const Navbar = () => {
//   const router = useRouter()
//   const [user, setUser] = useState(null)
//   const [error, setError] = useState(null)
//   const [isOpen, setIsOpen] = useState(false);
//   const [userName, setUserName] = useState(null);

//   const handleLogout = async () => {
//     try {
//       const response = await axios.get('/api/users/logout');
     
      
//       if (response.status === 200) {
//         toast.success("Logout successful");
//         console.log("Logout successful");
//         // localStorage.removeItem('token');
//         router.push('/login')
        
//       } else {
//         console.error("Logout failed");
//       }
//     } catch (error) {
//       toast.error("Logout failed");
//       console.error("Error during logout:", error.message);
//     }
//   }


//   useEffect(() => {
//     const getUserDetails = async () => {
//       const res = await axios.get('/api/users/me')
//       console.log(res.data);
//       // console.log("username =========",res.data.data.username)
//       setUserName(res.data.data.username)
//       setUser(res.data.data._id)
//       // setUser(res.data.user); // Use res.data.user instead of res.data.data._id
  
//     }
//   getUserDetails();
//   }, []); 

  

//   return (
//     <nav className="bg-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link href="/" className="flex items-center">
//               <Image src="/logo.png" alt="KrishiSmart Logo" width={40} height={40} className="mr-2" />
             
//               <span className="text-xl font-bold text-green-600">KrishiSmart</span>
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
//               {isOpen ? '✕' : '☰'}
//             </button>
//           </div>
        
//           {/* Desktop menu */}
//           <div className="hidden md:flex md:space-x-8 md:items-center">
//             <Link href="/" className="text-gray-700 hover:text-green-600">Home</Link>
//             <Link href="/seasonal-crop-planner" className="text-gray-700 hover:text-green-600">Seasonal Crop Planner</Link>
//             <Link href="/community" className="text-gray-700 hover:text-green-600">Community</Link>
//           <h1>{userName ? userName : "Guest"}</h1>
            
//             {user ? ( 
//               <button 
//                 onClick={handleLogout} 
//                 className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//               >
//                 Logout
//               </button>
//             ) : (
//               <Link href="/login" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Login</Link>
//             )}
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {isOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-green-600">Home</Link>
//               <Link href="/seasonal-crop-planner" className="block px-3 py-2 text-gray-700 hover:text-green-600">Seasonal Crop Planner</Link>
//               <Link href="/community" className="block px-3 py-2 text-gray-700 hover:text-green-600">Community</Link>
//               {/* {user ?  <button 
//                   onClick={handleLogout} 
//                   className="block w-full text-left px-3 py-2 text-red-600 hover:bg-gray-100"
//                 >
//                   Logout
//                 </button>
//               : (
//                 <Link href="/login" className="block px-3 py-2 text-green-600 hover:bg-gray-100">Login</Link>
//               )} */}
//             </div>
//           </div>
//         )}
       
//       </div>
//       {error && <div className="text-red-500 text-center py-2">{error}</div>}
//     </nav>
//   )
// }

// export default Navbar
// 'use client'
// import React, { useEffect, useState, useCallback } from 'react'
// import axios from 'axios'
// import { useRouter } from 'next/navigation'
// import Link from 'next/link'
// import Image from 'next/image'
// // Note: toast is being used but not imported - you'll need to import it
// import { toast } from 'react-toastify' // Add this if you're using react-toastify

// const Navbar = () => {
//   const router = useRouter()
//   const [user, setUser] = useState(null)
//   const [error, setError] = useState(null)
//   const [isOpen, setIsOpen] = useState(false)
//   const [userName, setUserName] = useState(null)
  
//   const getUserDetails = useCallback(async () => {
//     try {
//       const res = await axios.get('/api/users/me')
//       setUserName(res.data.data.username)
//       setUser(res.data.data._id)
//       setError(null)
//     } catch (err) {
//       console.error("Error fetching user details:", err)
//       setError("Failed to load user details")
//     }
//   }, [])

//   useEffect(() => {
//     getUserDetails()
//   }, [getUserDetails])

//   const handleLogout = async () => {
//     try {
//       const response = await axios.get('/api/users/logout')
//       if (response.status === 200) {
//         toast.success("Logout successful")
//         setUser(null)
//         setUserName(null)
//         router.push('/login')
//       }
//     } catch (error) {
//       toast.error("Logout failed")
//       setError("Failed to logout")
//     }
//   }

//   // Expose refresh function to window for login page to call
//   useEffect(() => {
//     window.refreshNavbar = getUserDetails
//     return () => {
//       delete window.refreshNavbar
//     }
//   }, [getUserDetails])

//   return (
//     <nav className="bg-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link href="/" className="flex items-center">
//               <Image src="/logo.png" alt="KrishiSmart Logo" width={40} height={40} className="mr-2" />
//               <span className="text-xl font-bold text-green-600">KrishiSmart</span>
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button 
//               onClick={() => setIsOpen(!isOpen)} 
//               className="text-gray-700 focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               {isOpen ? '✕' : '☰'}
//             </button>
//           </div>
        
//           {/* Desktop menu */}
//           <div className="hidden md:flex md:space-x-8 md:items-center">
//             <Link href="/" className="text-gray-700 hover:text-green-600">Home</Link>
//             <Link href="/seasonal-crop-planner" className="text-gray-700 hover:text-green-600">Seasonal Crop Planner</Link>
//             <Link href="/community" className="text-gray-700 hover:text-green-600">Community</Link>
//             <span className="text-gray-700">{userName || "Guest"}</span>
            
//             {user ? (
//               <button 
//                 onClick={handleLogout} 
//                 className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
//               >
//                 Logout
//               </button>
//             ) : (
//               <Link href="/login" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Login</Link>
//             )}
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {isOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-green-600">Home</Link>
//               <Link href="/seasonal-crop-planner" className="block px-3 py-2 text-gray-700 hover:text-green-600">Seasonal Crop Planner</Link>
//               <Link href="/community" className="block px-3 py-2 text-gray-700 hover:text-green-600">Community</Link>
//               <span className="block px-3 py-2 text-gray-700">{userName || "Guest"}</span>
//               {user ? (
//                 <button 
//                   onClick={handleLogout} 
//                   className="block w-full text-left px-3 py-2 text-red-600 hover:bg-gray-100 cursor-pointer"
//                 >
//                   Logout
//                 </button>
//               ) : (
//                 <Link href="/login" className="block px-3 py-2 text-green-600 hover:bg-gray-100">Login</Link>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//       {error && <div className="text-red-500 text-center py-2">{error}</div>}
//     </nav>
//   )
// }

// export default Navbar // Add export statement
// src/components/Navbar.js
'use client'
import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { toast } from 'react-toastify'

const Navbar = () => {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [userName, setUserName] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const checkAuthStatus = useCallback(async () => {
    try {
      const res = await axios.get('/api/users/me', { validateStatus: () => true })
      if (res.status === 200) {
        setIsAuthenticated(true)
        setUserName(res.data.data.username)
        setUser(res.data.data._id)
        setError(null)
      } else {
        setIsAuthenticated(false)
        setUser(null)
        setUserName(null)
        setError(null)
      }
    } catch (err) {
      console.error("Error checking auth status:", err)
      setIsAuthenticated(false)
      setUser(null)
      setUserName(null)
      setError(null)
    }
  }, [])

  useEffect(() => {
    checkAuthStatus()
  }, [checkAuthStatus])

  const handleLogout = async () => {
    try {
      const response = await axios.get('/api/users/logout')
      if (response.status === 200) {
        toast.success("Logout successful")
        setUser(null)
        setUserName(null)
        setIsAuthenticated(false)
        router.push('/login')
      }
    } catch (error) {
      toast.error("Logout failed")
      setError("Failed to logout")
    }
  }

  useEffect(() => {
    window.refreshNavbar = checkAuthStatus
    return () => {
      delete window.refreshNavbar
    }
  }, [checkAuthStatus])

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/logo.webp" alt="KrishiSmart Logo" width={40} height={40} className="mr-2" />
              <span className="text-xl font-bold text-green-600">KrishiSmart</span>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>

          <div className="hidden md:flex md:space-x-8 md:items-center">
            <Link href="/" className="text-gray-700 hover:text-green-600">Home</Link>
            <Link href="/seasonal-crop-planner" className="text-gray-700 hover:text-green-600">Seasonal Crop Planner</Link>
            <Link href="/community" className="text-gray-700 hover:text-green-600">Community</Link>
            <span className="text-gray-700">{userName || ""}</span>
            
            {user ? (
              <button 
                onClick={handleLogout} 
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
              >
                Logout
              </button>
            ) : (
              <Link href="/login" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Login</Link>
            )}
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-green-600">Home</Link>
              <Link href="/seasonal-crop-planner" className="block px-3 py-2 text-gray-700 hover:text-green-600">Seasonal Crop Planner</Link>
              <Link href="/community" className="block px-3 py-2 text-gray-700 hover:text-green-600">Community</Link>
              <span className={`${userName?"block":"hidden"} px-3 py-2 text-gray-700`}>{userName || ""}</span>
              {user ? (
                <button 
                  onClick={handleLogout} 
                  className="block w-full text-left px-3 py-2 text-red-600 hover:bg-gray-100 cursor-pointer"
                >
                  Logout
                </button>
              ) : (
                <Link href="/login" className="block px-3 py-2 text-green-600 hover:bg-gray-100">Login</Link>
              )}
            </div>
          </div>
        )}
      </div>
      {error && <div className="text-red-500 text-center py-2">{error}</div>}
    </nav>
  )
}

export default Navbar