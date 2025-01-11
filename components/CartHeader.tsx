import React from 'react'

const CartHeader = () => {
  return (
    <>
      <div className='grid grid-cols-12 gap-4 p-2 text-[12px] lg:text-xl'>
        <p>Sl.No</p>
        <p className='col-span-2'>Name</p>
        <p className='col-span-2'>Size</p>
        <p className='col-span-2'>Price</p>
        <p className='col-span-2'>Quantity</p>
        <p className='text-right col-span-2'>Amount</p>
      </div>
      <div className='border mt-2  mb-8 gradient-bg animate-fromUpper dark:border-white' />
    </>
  )
}

export default CartHeader