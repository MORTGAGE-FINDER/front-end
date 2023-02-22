import Image from "next/image"
export default function Home() {
    return (

        <>
            <h1 className="text-center text-6xl text-[#1EBBD7]">Loan Genie</h1>
            <div className="flex justify-center my-8">
                <img src="http://via.placeholder.com/300" width="300" height="900" alt="placeholder" />
            </div>
            <p className="max-w-md mx-auto text-center text-gray-600">Loan genie is a quick and easy way to determine if you MAY be eligible for a mortgage loan. We accomplished this using machine learning based off thousands of applicants from all over the United States. On the next screen we will ask you a few questions to help us get to know you more!</p>
        </>
    )
}