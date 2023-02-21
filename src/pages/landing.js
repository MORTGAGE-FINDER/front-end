import Image from "next/image"

export default function Landing() {
    return(
        <>
        <div className="container">
            <h1>Loan Genie</h1>
            <Image href="http://via.placeholder.com/300" alt='filler' />
            <h2>Sign in to get started!</h2>
            <a href="/api/auth/login">Sign In</a>
            </div>
        </>


    )
}