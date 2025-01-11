
import { getFoodsByCategories } from '@/lib/actions/food'
import FoodCards from './FoodCards';

const FoodLists = async ({ searchString }: { searchString: string }) => {
    const foodData = await getFoodsByCategories();
    const filterData = foodData.map((category: any) => ({
        ...category,
        items: category.items.filter((food: any) => food.name.toLowerCase().includes(searchString.toLowerCase())),
    })).filter((item: any) => item.items.length > 0);
    
    if ((filterData.length == 0)) return <h1 className='flex-center mt-12'>{`No food availlable for ${searchString}`}</h1>;
    return (
        <>
            <div className='mb-12 sm:mb-2'>
                {filterData.map(category => (
                    <div key={category._id} >
                        <h1 className='text-2xl lg:text-4xl mt-10 mx-5 font-bold animate-onLoading transition delay-100 duration-500 ease-in'>{category._id}</h1>
                        <div className='border mt-2  mb-8 ml-4 gradient-bg animate-fromUpper dark:border-white' />
                        <FoodCards foods={category.items} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default FoodLists