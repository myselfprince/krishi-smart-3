'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { toast } from 'react-toastify'

const ProfilePage = () => {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [userName, setUserName] = useState(null)
  const [error, setError] = useState(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  // Fetch user details
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await axios.get('/api/users/me', { validateStatus: () => true })
        if (res.status === 200) {
          setUserName(res.data.data.username)
          setUser(res.data.data._id)
          setError(null)
        } else {
          setError("Failed to load user details")
          router.push('/login') // Redirect to login if not authenticated
        }
      } catch (err) {
        console.error("Error fetching user details:", err)
        setError("Failed to load user details")
        router.push('/login')
      }
    }
    fetchUserDetails()
  }, [router])

  // Function to get the first letter of the username
  const getFirstLetter = (name) => {
    return name ? name.charAt(0).toUpperCase() : ''
  }

  // Mock data for stats and recent activity (replace with actual data from your backend)
  const userStats = {
    cropsPlanned: 12,
    budgetManaged: 45000,
    communityContributions: 3,
  }

  const recentActivities = [
    { action: "Planned crops for the season", date: "2025-03-28" },
    { action: "Scanned plants for diseases", date: "2025-03-25" },
    { action: "Watched a tutorial on FarmerTube", date: "2025-03-20" },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="bg-green-700 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {userName ? (
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-green-300 rounded-full flex items-center justify-center text-green-800 text-4xl font-semibold mb-4">
                {getFirstLetter(userName)}
              </div>
              <h1 className="text-3xl font-bold">{userName}</h1>
              <p className="text-green-100 mt-2">Empowering Your Farming Journey</p>
              <button
              onClick={() => setIsEditModalOpen(true)}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer">
                Edit Profile
              </button>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      {isEditModalOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
            placeholder="Username"
          />
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => setIsEditModalOpen(false)}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                // Add API call to update user details
                setIsEditModalOpen(false)
              }}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* User Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold text-green-800">Crops Planned</h3>
            <p className="text-2xl font-bold text-gray-700 mt-2">{userStats.cropsPlanned}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold text-green-800">Budget Managed</h3>
            <p className="text-2xl font-bold text-gray-700 mt-2">₹{userStats.budgetManaged}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold text-green-800">Community Contributions</h3>
            <p className="text-2xl font-bold text-gray-700 mt-2">{userStats.communityContributions}</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-green-800 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/seasonal-crop-planner" className="bg-green-100 p-6 rounded-lg shadow-md text-center hover:bg-green-200 transition-colors">
              <span className="text-3xl mb-2 block">🌱</span>
              <h3 className="text-lg font-semibold text-green-800">Plan Crops</h3>
              <p className="text-gray-600 mt-2">AI-powered crop planning</p>
            </Link>
            <Link href="/market-price-predictor" className="bg-green-100 p-6 rounded-lg shadow-md text-center hover:bg-green-200 transition-colors">
              <span className="text-3xl mb-2 block">📊</span>
              <h3 className="text-lg font-semibold text-green-800">Check Market Prices</h3>
              <p className="text-gray-600 mt-2">Real-time price predictions</p>
            </Link>
            <Link href="/disease-detection" className="bg-green-100 p-6 rounded-lg shadow-md text-center hover:bg-green-200 transition-colors">
              <span className="text-3xl mb-2 block">🦠</span>
              <h3 className="text-lg font-semibold text-green-800">Scan Plants</h3>
              <p className="text-gray-600 mt-2">Detect crop diseases</p>
            </Link>
            <Link href="/farmertube" className="bg-green-100 p-6 rounded-lg shadow-md text-center hover:bg-green-200 transition-colors">
              <span className="text-3xl mb-2 block">🎥</span>
              <h3 className="text-lg font-semibold text-green-800">Watch Tutorials</h3>
              <p className="text-gray-600 mt-2">Learn from experts</p>
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-green-800 mb-6">Recent Activity</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {recentActivities.length > 0 ? (
              <ul className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span className="text-gray-700">{activity.action}</span>
                    <span className="text-gray-500 text-sm">{activity.date}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No recent activity to show.</p>
            )}
          </div>
        </div>

        {/* Community Contributions */}
        <div>
          <h2 className="text-2xl font-bold text-green-800 mb-6">Community Contributions</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {userStats.communityContributions > 0 ? (
              <p className="text-gray-700">
                You have supported {userStats.communityContributions} farmers through crowdfunding initiatives. Thank you for making a difference!
              </p>
            ) : (
              <p className="text-gray-600">
                You have not made any community contributions yet. Explore the <Link href="/community" className="text-green-600 hover:underline">Community</Link> section to support fellow farmers!
              </p>
            )}
          </div>
        </div>
      </div>

      {error && <div className="text-red-500 text-center py-4">{error}</div>}
    </div>
  )
}

export default ProfilePage