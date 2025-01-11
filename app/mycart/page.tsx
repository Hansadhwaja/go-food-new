
import Order from '@/components/Order';
import MyCartSkeleton from '@/components/Skeleton/MyCartSkeleton';
import React, { Suspense } from 'react'

const MyCart = () => {
    return (
        <section className='max-container min-h-screen'>
            <h1 className='text-2xl lg:text-4xl mt-10 font-bold animate-onLoading transition delay-100 duration-500 ease-in'>My Cart</h1>
            <div className='border mt-2  mb-8 gradient-bg animate-fromUpper dark:border-white' />
            {/* <Suspense fallback={<MyCartSkeleton />} >
                <Order />
            </Suspense> */}
            <Order />

        </section>
    )
}

export default MyCart