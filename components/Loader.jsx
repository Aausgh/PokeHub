import React from 'react'
import Image from 'next/image'
import loader from '@public/Loader.gif'

const Loader = () => {
  return (
    <div className='w-full m-auto h-full py-72'>
      <Image src={loader} width={100} height={100} className='m-auto' alt='loader image' />
    </div>
  )
}

export default Loader