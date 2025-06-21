import Image from 'next/image'
import React from 'react'
import Container from '../small_componants/Container'

function Services() {

    const servcies = [
        {
        icon:"/code.png",
        Title:"Project Managment"
    } ,
        {
        icon:"/countdown-2.png",
        Title:"Time Tracking"
    } ,  {
        icon:"/smartphone.png",
        Title:"Beatiful Mobile app"
    }]

  return (
 <Container>
     <div className="servcies grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 max-xl:gap-5 max-xl:mt-8 w-full gap-15 mt-20">
   {servcies.map((e) => (
    <>
     <div className="service p-10">
        <Image src={"/services" + e.icon} className='w-fit h-fit' alt='' width={48} height={48} />
        <h1 className='font-semibold mt-4 mb-2 text-xl'>{e.Title}</h1>
        <p className='leading-7'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sequi ullam beatae necessitatibus porro, Expedita sequi ullam beatae necessitatibus porro</p>
    </div>
    </>
   ))}
  </div>
 </Container>
  )
}

export default Services
