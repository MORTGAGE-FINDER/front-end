import Image from "next/image"
export default function About() {
  return (
    <div className="bg-[url('/images/krakenimages-Y5bvRlcCx8k-unsplash.jpg')] h-screen w-screen bg-contain bg-center">
    <div className="flex justify-center">
      <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-70 mr-20 mt-4 w-30">
        <div class="flex-column">
          <Image class="h-30 w-30 rounded-full object-cover mx-auto " src="https://ca.slack-edge.com/T039KG69K-U03V0N804HE-a1af50c10b55-192" width="200" height="200" alt="Avatar"/>
            <div>
              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Full Stack Software Developer</h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </div>
      </a>
      <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-70 mt-4 w-30">
        <div class="flex-column">
          <Image class="h-30 w-30 rounded-full object-cover mx-auto " src="https://ca.slack-edge.com/T039KG69K-U043BMUTN8Y-af494fd60f05-512" width="200" height="200" alt="Avatar"/>
            <div>
              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Full Stack Software Developer</h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </div>
      </a>
      </div>
      <div className="flex justify-center">
      <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-70 mr-20  mt-4 w-30">
        <div class="flex-column">
          <Image class="h-30 w-30 rounded-full object-cover mx-auto " src="https://ca.slack-edge.com/T039KG69K-U03L05MFV0D-c579665bc967-512" width="200" height="200" alt="Avatar"/>
            <div>
              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Full Stack Software Developer</h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </div>
      </a>
      <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-70 mt-4 w-30">
        <div class="flex-column">
          <Image class="h-30 w-30 rounded-full object-cover mx-auto " src="https://ca.slack-edge.com/T039KG69K-U03UK4DJ5JR-52754228f88f-512" width="200" height="200" alt="Avatar"/>
            <div>
              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Full Stack Software Developer</h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </div>
      </a>
      </div>
      </div>
  )
}