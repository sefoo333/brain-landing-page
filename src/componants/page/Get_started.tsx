import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Container from '../small_componants/Container'

function Get_started() {
  return (
   <Container className='bg-[#F4F7FA]'>
     <div className='flex mt-25 max-xl:flex-col  items-center justify-between gap-15'>
      <div className="text basis-[45%] max-xl:basis-full max-xl:text-center ">
        <h1 className='font-bold leading-13 text-5xl mb-3 text-start max-xl:text-center max-xl:text-3xl max-xl:leading-9'>Get Started with elband is esiar than ever</h1>
        <p className='text-xl leading-10 text-gray-600 max-xl:text-lg max-xl:leading-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus debitis amet illum natus unde est cupiditate aut, iusto dolore, veniam sed maiores totam voluptatum dolorum quidem</p>

                <Button variant={"default"} className='mr-8 bg-purple-700 mt-8 p-15 py-7 text-md max-xl:mr-0' size={"lg"}> Get Started For Free <ArrowRight size={20} className='text-xl' /></Button>
      </div>
      <Image src={"/get_started.png"} className='w-[500px] h-[500px] mt-15 max-xl:mt-10 max-xl:w-fit max-xl:h-fit' alt='' width={500} height={500} />
    </div>
   </Container>
  )
}

export default Get_started
