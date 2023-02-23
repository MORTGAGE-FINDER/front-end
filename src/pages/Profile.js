import React from 'react';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div className="flex justify-center">
        <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-70 mt-4 w-30">
        <Image src={user.picture} width="100" height="100" alt={user.name} class="h-30 w-30 rounded-full object-cover mx-auto " />
        <h2 className="text-white">{user.name}</h2>
        <p className="text-white mb-5">{user.email}</p>
        <Link href="/api/auth/logout" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Logout</Link>
        </a>
        
      </div>
    )
  );
}