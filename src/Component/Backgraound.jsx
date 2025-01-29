import React from 'react'
import xrs from './xrs.png'
const Backgraound = () => {
  return (
    <>
      <div className="container mx-auto">
        <div class="grid justify-items-center w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-black dark:border-gray-700">
          <img className='w-96' src={xrs} alt="" />
          <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">XRS!</h5>
          <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-100 bg-slate-900 p-3">
            Wedding | Engagement | All Events
          </p>
          <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
            Prof. Wedding Photographer You are beadutiful, and I'am here to capture it!
          </p>

          <div class="w-full md:block md:w-auto mt-10 mb-10" >
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-black dark:border-black">
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-300 md:p-0 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-yellow-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-yellow-700 text-5xl"><i class="fa-brands fa-instagram"></i></a>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-300 md:p-0 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-yellow-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-yellow-700 text-5xl"><i class="fa-brands fa-whatsapp"></i></a>
              </li>
              <li>
             
              <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-yellow-300 md:p-0 md:dark:hover:text-yellow-500 dark:text-white dark:hover:bg-yellow-400 dark:hover:text-white md:dark:hover:bg-transparent dark:border-yellow-700 text-5xl"><i class="fa-brands fa-facebook"></i></a>
              
              </li>
            </ul>
          </div>
        </div>
        </div>

    </>
  )
}

export default Backgraound