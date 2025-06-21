import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Container from '../small_componants/Container'

function Hero() {
  return (
    <Container>
      <div className="hero flex flex-col items-center text-center ">
       <div className="main flex flex-col items-center text-center">
          <h1 className='font-bold text-6xl w-[70%] max-md:w-fit  max-xl:text-4xl text-center'>Get things done by awesome remote team</h1>
         <p className='text-gray-600 mt-7 w-[60%] max-md:w-fit'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae placeat doloremque eos ex quibusdam amet. Optio commodi similique recusandae et atque delectus</p>
    <div className="buttons mt-9">
        <Button variant={"default"} className='mr-8 bg-[#473BF0] hover:bg-[#473bf0d5] p-15 py-7 text-md' size={"lg"}> Get Started For Free <ArrowRight size={20} className='text-xl' /></Button>
        <Button variant={"ghost"} className=' py-7 px-[25px] text-md'>Learn More</Button>
    </div>
       </div>
       <Image src={"/browser.png"} className='mt-25 max-md:hidden' alt='' width={848} height={562} />
    </div>
    </Container>
  )
}

export default Hero
