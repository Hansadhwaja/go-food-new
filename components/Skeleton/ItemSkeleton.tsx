import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ItemSkeleton = () => {
  return (
    <div className='w-full flex flex-col md:flex-row min-h-60 mb-12'>
      <div className=' h-60 xl:h-auto w-full md:w-[50%] -mt-1'>
        <Skeleton width="100%" height="100%" borderRadius={12} />
      </div>
      <div className='h-60 p-4 w-full md:w-[50%]'>
        <Skeleton width='50%' height='20%' borderRadius={8} />
        <Skeleton width='100%' height='10%' count={3} borderRadius={4} />
        <div className='flex gap-3 h-10 mb-3'>
          <Skeleton width={100} height="100%" borderRadius={4} />
          <Skeleton width={100} height="100%" borderRadius={4} />
          <Skeleton width={100} height="100%" borderRadius={4} />
        </div>
        <Skeleton width='100%' height='20%' borderRadius={8} />
      </div>
    </div>
  );
};

export default ItemSkeleton;
