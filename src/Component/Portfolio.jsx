import React from 'react'
import p1 from './p1.jpeg'
import p2 from './p2.jpeg'
import p3 from './p3.jpeg'
import p4 from './p4.jpeg'
import p5 from './p5.jpeg'

const Portfolio = () => {
  return (
<>
<div className="container mx-auto bg-gray-200 p-10 rounded-lg">
       <div className="container">
       <h1 class="mt-4 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black text-center p-4">
        
        <span className='bg-gradient-to-r from-orange-400 via-yellow-600 to-yellow-500 p-1 rounded-lg'>Portfolio !</span>
        </h1>
       </div>

<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src={p1} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={p2} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={p3} alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src={p4} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={p5}alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={p3} alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src={p3} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={p3} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg"src={p3} alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src={p3} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={p3}alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={p3} alt=""/>
        </div>
    </div>
</div>


</div>
</>  
)
}

export default Portfolio