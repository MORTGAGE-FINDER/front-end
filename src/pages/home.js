import Image from "next/image"
import Link from "next/link"
export default function Home() {
    return (

        <div className="bg-[url('/images/dillon-kydd-2keCPb73aQY-unsplash.jpg')] h-screen w-screen bg-cover bg-center">
            <h1 className="text-center text-6xl text-[#1EBBD7]">Loan Genie</h1>
            <div className="flex justify-center my-8">
                {/* <img src="http://via.placeholder.com/300" width="300" height="900" alt="placeholder" /> */}
            </div>
            <div className="text-center">
            <p className="max-w-md mt-60 mx-auto  text-white">Loan genie is a quick and easy way to determine if you MAY be eligible for a mortgage loan. We accomplished this using machine learning based off thousands of applicants from all over the United States. On the next screen we will ask you a few questions to help us get to know you more!</p>
            <Link href="./Services" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-7 ">Get Started</Link>
            </div>
            
        </div>
    )
}