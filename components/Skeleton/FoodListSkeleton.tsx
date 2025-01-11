
import ItemSkeleton from './ItemSkeleton'
import ItemHeaderSkeleton from './ItemHeaderSkeleton'


const FoodListSkeleton = () => {
  return (
    <>
      <div className='mt-4 animate-pulse'>
        <ItemHeaderSkeleton />
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-6'>
          <ItemSkeleton />
          <ItemSkeleton />
          <ItemSkeleton />
          <ItemSkeleton />
        </div>
      </div>
      <div className='mt-4 animate-pulse'>
        <ItemHeaderSkeleton />
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-6'>
          <ItemSkeleton />
          <ItemSkeleton />
          <ItemSkeleton />
          <ItemSkeleton />
        </div>
      </div>
      <div className='mt-4 animate-pulse'>
        <ItemHeaderSkeleton />
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-6'>
          <ItemSkeleton />
          <ItemSkeleton />
          <ItemSkeleton />
          <ItemSkeleton />
        </div>
      </div>
    </>
  )
}

export default FoodListSkeleton