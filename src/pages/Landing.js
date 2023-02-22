import Image from "next/image"
import Link from "next/link"


export default function Landing() {
    return (
        <>
            <div className="bg-[url('/images/ralph-ravi-kayden-2d4lAQAlbDA-unsplash.jpg')] h-screen w-screen bg-cover bg-center" >


                <h1 className="text-white pt-40 flex justify-center">Welcome to Loan Genie</h1>
                <h2 className="text-white flex justify-center pt-4">To get started!</h2>

                <div className="flex justify-center"><Link href="/api/auth/login?returnTo=/home" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Sign In</Link></div>

            </div>
        </>

    )
}