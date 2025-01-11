
import PastOrders from '@/components/PastOrders';
import MyOrderSkeleton from '@/components/Skeleton/MyOrderSkeleton';
import { Suspense } from 'react';

const MyOrders = () => {
    return (
        <section className='max-container min-h-screen'>
            <h1 className='text-2xl lg:text-4xl mt-10 font-bold animate-onLoading transition delay-100 duration-500 ease-in'>My Orders</h1>
            <div className='border mt-2  mb-8 gradient-bg animate-fromUpper dark:border-white' />
            {/* <Suspense fallback={<MyOrderSkeleton />}>
                <PastOrders />
            </Suspense> */}
            <PastOrders />
        </section>
    )
}

export default MyOrders