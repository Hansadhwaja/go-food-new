import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ItemHeaderSkeleton = () => {
  return (
    <div className='animate-pulse mb-4'>
      <Skeleton width={200} height={40} borderRadius={8} />
      <Skeleton height={2} />
    </div>
  )
}

export default ItemHeaderSkeleton