
"use client"
import React, { useState } from 'react'
import Image from "next/image";
// import Image1 from '/public/pic1.png'
import Image2 from '/public/werty.png';






const signup = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate an API call
    setTimeout(() => {
      setLoading(false);
      alert('Registered successfully!');
    }, 2000);
  };
    
  return (
    <div className="relative h-screen w-full">
    {/* Background Image */}
    <div className="absolute inset-0">
      <Image 
        src={Image2} 
        alt="Background Image" 
        layout="fill" 
        objectFit="cover" 
        quality={100} 
      />
    </div>

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black opacity-50"></div>

    {/* Content on Top of the Background */}
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="p-8 rounded-lg shadow-lg w-full max-w-md transform transition duration-500 hover:scale-105">
      <div className="bg-[#ffffff86] p-8 rounded-lg shadow-2xl max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Create a password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ${loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-600 text-sm">
            Already have an account? <a href="/login" className="text-blue-500 hover:underline">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default signup