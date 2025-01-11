import React from 'react'
import OrderItemSkeleton from './OrderItemSkeleton'

const MyOrderSkeleton = () => {
    return (
        <div className='animate-pulse '>
            <OrderItemSkeleton />
            <OrderItemSkeleton />
            <OrderItemSkeleton />
            <OrderItemSkeleton />
        </div>
    )
}

export default MyOrderSkeleton