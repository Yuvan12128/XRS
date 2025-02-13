import React from 'react'
import p1 from './p1.jpeg'
import p2 from './p2.jpeg'
import p3 from './p3.jpeg'
import p4 from './p4.jpeg'
import p5 from './p5.jpeg'

const Gallery = () => {
  return (
<>
<div className="container mx-auto bg-gray-200 p-10 rounded-lg">
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

export default Gallery