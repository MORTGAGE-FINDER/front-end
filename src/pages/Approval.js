import Confetti from 'react-confetti'
export default function Approval({ prediction }) {
  return (
    <>
      <div className="bg-[#111827] rounded-lg overflow-hidden shadow-lg mx-auto max-w-sm mb-80">
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-white text-center mb-2">LOAN APPROVAL!</div>
          <p className="text-white text-2xl text-base">{prediction}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <svg className="h-12 w-12 text-green-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 1a9 9 0 110 18 9 9 0 010-18zm4.95 6.707l-4.536 4.546-1.414-1.414L8.464 9.85l1.414-1.414 1.536 1.535 3.536-3.546 1.414 1.414z" />
          </svg>
        </div>
      </div>
    </>
  )
}