import React from 'react'
import ItemHeaderSkeleton from './ItemHeaderSkeleton'
import TableSkeleton from './TableSkeleton'
import Skeleton from 'react-loading-skeleton'

const MyCartSkeleton = () => {
    return (
        <div className='animate-pulse'>
            <TableSkeleton />
            <TableSkeleton />
            <TableSkeleton />
            <TableSkeleton />
            <TableSkeleton />
            <TableSkeleton />
            <FooterTableSkeleton />
        </div>
    )
}

export const FooterTableSkeleton = () => {
    return (
        <div className='flex gap-3 h-10 mb-3'>
            <Skeleton width={510} height="100%" borderRadius={4} />
            <Skeleton width={100} height="100%" borderRadius={4} />
        </div>
    )
}

export default MyCartSkeleton