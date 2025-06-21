import React from 'react'
import Container from '../small_componants/Container'
import { Button } from '@/components/ui/button'

function Plans() {


    const features = [
        "Can I use Albino for My Clients ?",
        "Does It Work for wordpress ?",
        "Do I get free updates ?",
        "Will you provide support ?"
    ];

  return (
   <Container className='bg-[#161C2D]  p-20 max-xl:p-0'>
      <div className="title text-center text-white flex flex-col  items-center justify-center gap-5 w-1/2 max-xl:w-fit max-xl:mt-20">
        <h1 className='font-bold text-4xl'>Pricing & Plans</h1>
        <p className='text-slate-300 text-[17px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic mollitia incidunt necessitatibus beatae architecto doloremque consequuntur iste dolores in</p>
    </div>
    <div className="plans grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 items-center justify-center mt-10 gap-10">
        <div className="plan p-10 rounded-md bg-white flex flex-col items-center justify-center gap-5 mt-10">
            <span className="rounded-full bg-[#473BF0]/15 px-5 py-1.5 text-md tracking-[2px] uppercase whitespace-nowrap font-bold text-[#473BF0]">
  Basic
</span>
<div className="head text-center mb-4">
    <h1 className='font-bold text-5xl mb-3'>$29</h1>
    <p className='text-[16px] text-slate-600'>One time purchase</p>
</div>

<p className='text-slate-600 text-center text-[16px] leading-7 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit temporibus odit neque. Deserunt natus in reiciendis eos sit itaque.</p>

<Button variant={"default"} className='mt-5 bg-[#473BF0] w-full p-15 py-7 text-md hover:bg-[#473bf0d5]' size={"lg"}>Get Started For Free</Button>

        </div>
        <div className="plan p-10 rounded-md bg-white flex flex-col items-center justify-center gap-5 mt-10">
            <span className="rounded-full bg-[#473BF0]/15 px-5 py-1.5 text-md tracking-[2px] uppercase whitespace-nowrap font-bold text-[#473BF0]">
  Standard
</span>
<div className="head text-center mb-3">
    <h1 className='font-bold text-5xl mb-3'>$49</h1>
    <p className='text-[16px] text-slate-600'>One time purchase</p>
</div>

<p className='text-slate-600 text-center text-[16px] leading-7 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit temporibus odit neque. Deserunt natus in reiciendis eos sit itaque.</p>

<Button variant={"default"} className='mt-5 bg-[#473BF0] w-full p-15 py-7 text-md hover:bg-[#473bf0d5]' size={"lg"}>Get Started For Free</Button>

        </div>
        <div className="plan p-10 rounded-md bg-white flex flex-col items-center justify-center gap-5 mt-10">
            <span className="rounded-full bg-[#473BF0]/15 px-5 py-1.5 text-md tracking-[2px] uppercase whitespace-nowrap font-bold text-[#473BF0]">
  Premium
</span>
<div className="head text-center mb-3">
    <h1 className='font-bold text-5xl mb-3'>$99</h1>
    <p className='text-[16px] text-slate-600'>One time purchase</p>
</div>

<p className='text-slate-600 text-center text-[16px] leading-7 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit temporibus odit neque. Deserunt natus in reiciendis eos sit itaque.</p>

<Button variant={"default"} className='mt-5 bg-[#473BF0] w-full p-15 py-7 text-md hover:bg-[#473bf0d5]' size={"lg"}>Get Started For Free</Button>

        </div>
      
    </div>
      <div className="features grid grid-cols-2 max-md:grid-cols-1 max-xl:grid-cols-2 gap-25 text-white mt-20">
{features.map((feature) => (
<>
<div className="feature flex gap-5">
        <span className='p-5 bg-green-400 rounded-full text-xl w-10 h-10 items-center flex justify-center font-semibold'>?</span>
    <div className="flex flex-col gap-5 mb-4">
        <h1 className='font-semibold text-2xl '>{feature} </h1>
    <p className='font-light text-[18px] leading-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores repellendus doloribus eveniet sed possimus sunt necessitatibus magnam tempore aperiam suscipit beatae dolor impedit molestias, qui quo dolore quasi illo facilis.</p>
    </div>
</div>

</>    
))}

      </div>

      <h1 className='text-center text-white mt-25 text-xl font-light max-xl:mt-16 max-xl:mb-8'>Haven&apos;t got your answer ? <span className='text-green-500'>Contact our support now</span></h1>
   </Container>
  )
}

export default Plans
