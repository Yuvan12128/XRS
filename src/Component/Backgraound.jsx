import React from 'react'
import xrs from './xrs.png'
const Backgraound = () => {
  return (
    <>
      <div className="container mx-auto">
        <div class="grid justify-items-center w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-black dark:border-gray-700">
          <img className='w-96' src={xrs} alt="" />
          <h5 class="mb-2 text-3xl font-bold text-white">xromeosanjeev !</h5>
          <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-100 bg-slate-900 p-3 mt-5">
            Wedding | Engagement | All Events
          </p>
          <div className="container mx-auto p-5">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
             Book Now !
            </span>
          </button>
          </div>
          <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            Proffosnal Wedding Photographer You are beadutiful, and I'am here to capture it!
          </p>


          <div class="grid gap-4">

            <div class="grid grid-cols-4 gap-4 text-white ">
              <div className='hover:text-yellow-400'>
                <i class="fa-brands fa-whatsapp h-auto max-w-full rounded-lg text-5xl"></i>
              </div>
              <div className='hover:text-yellow-400'>
                <i class="fa-brands fa-instagram h-auto max-w-full rounded-lg text-5xl"></i>
              </div>
              <div className='hover:text-yellow-400'>
                <i class="fa-brands fa-facebook h-auto max-w-full rounded-lg text-5xl"></i>
              </div>
              <div className='hover:text-yellow-400'>
                <i class="fa-brands fa-twitter h-auto max-w-full rounded-lg text-5xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Backgraound