import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const TableSkeleton = () => {
    return (
        <div className='flex gap-3 h-12 mb-3'>
            <Skeleton width={50} height="100%" borderRadius={4} />
            <Skeleton width={200} height="100%" borderRadius={4} />
            <Skeleton width={70} height="100%" borderRadius={4} />
            <Skeleton width={70} height="100%" borderRadius={4} />
            <Skeleton width={70} height="100%" borderRadius={4} />
            <Skeleton width={100} height="100%" borderRadius={4} />
            <Skeleton width={30} height="100%" borderRadius={4} />
        </div>
    )
}

export default TableSkeleton