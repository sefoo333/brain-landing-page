import React from 'react'

function Container({children , className}: {children: React.ReactNode,className?:string}) {
  return (
    <div className={"parent flex-col items-center flex justify-center mt-25 " + className}>
<div className="container flex flex-col justify-center items-center w-[85rem] max-xl:w-fit max-xl:px-5">
    {children}      
    </div>
    </div>
  )
}

export default Container
