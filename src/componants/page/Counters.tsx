import React from 'react'
import Container from '../small_componants/Container'

function Counters() {
  return (
  <Container>
    <div className="counters grid grid-cols-3 gap-20 p-20 max-md:grid-cols-1 max-xl:grid-cols-2 max-xl:gap-8 max-xl:p-0">
      <div className="counter flex gap-6 items-center">
        <h1 className='text-5xl font-bold max-xl:text-4xl'>1M+</h1>
        <p className='text-xl text-slate-600 max-xl:text-lg'>Customers visit Albino every months</p>
        </div>
      <div className="counter flex gap-6 items-center">
        <h1 className='text-5xl font-bold max-xl:text-4xl'>93%</h1>
        <p className='text-xl text-slate-600 max-xl:text-lg'>Customers visit Albino every months</p>
        </div>
      <div className="counter flex gap-6 items-center ">
        <h1 className='text-5xl font-bold max-xl:text-4xl'>4.9</h1>
        <p className='text-xl text-slate-600 max-xl:text-lg'>Customers visit Albino every months</p>
        </div>
        </div>
  </Container>
  )
}

export default Counters
