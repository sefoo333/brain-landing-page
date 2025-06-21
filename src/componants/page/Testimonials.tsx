import React from 'react'
import Container from '../small_componants/Container'
import Image from 'next/image'

function Testimonials() {
  return (
    <Container className='bg-[#F4F7FA] py-20'>
        <div className="testimonials grid grid-cols-2 max-md:grid-cols-1 max-xl:gap-30 gap-15 items-center">
            <div className="box text-center flex flex-col items-center justify-center">
                <Image src={"/Oval.png"} className=' mb-6' alt='' width={70} height={70} />
<h1 className='font-bold text-2xl'>&quot;You made it so simple&quot;</h1>
<p className='text-md text-slate-600 mt-3 w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut, tempora aut deserunt eligendi!</p>
<div className="author mt-8">
    <h1 className='font-semibold text-xl'>Adam Michael</h1>
    <h3 className=' text-md text-slate-600'>Front-end Developer</h3>
</div>
            </div>
            <div className="box text-center flex flex-col items-center justify-center">
                <Image src={"/Oval2.png"} className=' mb-6' alt='' width={70} height={70} />
<h1 className='font-bold text-2xl'>&quot;Simply My test&quot;</h1>
<p className='text-md text-slate-600 mt-3 w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut, tempora aut deserunt eligendi!</p>
<div className="author mt-8">
    <h1 className='font-semibold text-xl'>lan klein</h1>
    <h3 className=' text-md text-slate-600'>Digital Marketer</h3>
</div>
            </div>
         
        </div>
    </Container>
  )
}

export default Testimonials
