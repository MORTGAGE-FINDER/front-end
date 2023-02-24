import { useState } from 'react'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0/client';


const ProfileDropdown = () => {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:underline transition duration-150 ease-in-out">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
        <span className="mr-1 text-white">{user.name}</span>
      </button>
      {isOpen && (
        <div className="absolute z-10 right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-lg">
          <Link href="/Profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Profile</Link>
          <Link href="/api/auth/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Logout</Link>
        </div>
      )}
    </div>
  )
}

export default ProfileDropdown
