import React from 'react'
import Container from '../small_componants/Container'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

function CFA() {
  return (
    <Container>
        <div className="flex justify-between items-center my-10 max-xl:flex-col max-xl:gap-10">
           <div className="title text-start flex flex-col items-start justify-center gap-5 basis-[45%] max-xl:items-center max-xl:text-center max-xl:basis-full">
        <h1 className='font-bold text-4xl '>Manage Your Project Fast</h1>
        <p className='text-slate-600 text-[19px] leading-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  architecto doloremque consequuntur iste dolores in</p>
    </div>
    <div className="flex gap-1 max-sm:flex-col max-sm:gap-5 max-sm:items-center">
                <Button variant={"default"} className='mr-8 max-sm:m-0 bg-[#473BF0]/20 text-[#473BF0] p-13 py-7 text-md flex gap-9 max-xl:gap-2' size={"lg"}> Learn More <ArrowRight size={30} className='text-xl' /></Button>
        <Button variant={"default"} className='mr-8 max-sm:m-0 bg-[#473BF0] p-13 py-7 flex gap-9 text-md max-xl:gap-2' size={"lg"}> Get it Now <ArrowRight size={20} className='text-xl' /></Button>

    </div>
        </div>
    </Container>
  )
}

export default CFA
