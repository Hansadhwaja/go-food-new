
import FoodCard from './FoodCard';

const FoodCards = async ({ foods }: { foods: [] }) => {
    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-6'>
        {foods.map((food: any, index: number) => (
            <FoodCard
                key={food._id}
                id={food._id.toString()}
                name={food.name}
                description={food.description}
                img={food.img}
                options={food.options[0]}
                index={index}
            />
        ))}

    </div>
    )
}

export default FoodCards