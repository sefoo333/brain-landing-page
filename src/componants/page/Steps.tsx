import React from 'react'
import Container from '../small_componants/Container'
import Image from 'next/image'

function Steps() {
  return (
<Container>
    <div className="title text-center flex flex-col items-center justify-center gap-5 w-1/2 max-xl:w-fit max-xl:mt-10">
        <h1 className='font-bold text-5xl'>Manage Your Project Fast</h1>
        <p className='text-slate-600 text-[17px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic mollitia incidunt necessitatibus beatae architecto doloremque consequuntur iste dolores in</p>
    </div>

    <div className="grid grid-cols-2 max-xl:grid-cols-1 items-center mt-10" >
                <Image src={"/steps.png"} className=' mt-15' alt='' width={486} height={361} />
        <div className="steps">
           <div className="step flex items-center gap-10 p-8">
             <h1 className='w-10 h-10 p-7 flex items-center justify-center rounded-full bg-[#F4F7FA] text-[#473BF0] font-semibold text-xl'>1</h1>
            <div className="text">
                <h1 className='font-bold text-2xl mb-2.5'>Create Project</h1>
        <p className='text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic mollitia incidunt necessitatibus dolores in</p>
            </div>
           </div>
           <div className="step flex items-center gap-10 p-8">
             <h1 className='w-10 h-10 p-7 flex items-center justify-center rounded-full bg-[#F4F7FA] text-[#473BF0] font-semibold text-xl'>2</h1>
            <div className="text">
                <h1 className='font-bold text-2xl mb-2.5'>Assign Related People</h1>
        <p className='text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic mollitia incidunt necessitatibus dolores in</p>
            </div>
           </div>
           <div className="step flex items-center gap-10 p-8">
             <h1 className='w-10 h-10 p-7 flex items-center justify-center rounded-full bg-[#F4F7FA] text-[#473BF0] font-semibold text-xl'>3</h1>
            <div className="text">
                <h1 className='font-bold text-2xl mb-2.5'>Make It done on-time</h1>
        <p className='text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic mollitia incidunt necessitatibus dolores in</p>
            </div>
           </div>
        </div>
    </div>

</Container>
  )
}

export default Steps
