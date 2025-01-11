import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const OrderItemSkeleton = () => {
    return (
        <div className='mt-12 border rounded-xl p-4'>
            <Skeleton width="40%" height="100%" borderRadius={4} />
            <Skeleton width='30%' height="100%" borderRadius={4} />
            <Skeleton height={70} borderRadius={8} className='mt-6' />
            <Skeleton height={70} borderRadius={8} />
            <Skeleton height={70} borderRadius={8} className='mb-6'/>
            <div className='flex gap-3 mb-3'>
                <Skeleton width={120} height="100%" borderRadius={4} />
                <Skeleton width={100} height="100%" borderRadius={4} />
            </div>
        </div>
    )
}

export default OrderItemSkeleton