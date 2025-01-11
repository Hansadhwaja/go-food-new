'use client'
import Image from 'next/image'
import { useState } from 'react';
import { Button } from './ui/button';
import { ObjectId } from 'mongoose';
import { Input } from './ui/input';
import { useCartStore } from '@/store/cartStore';
import { useToast } from '@/hooks/use-toast';

interface FoodData {
    id: ObjectId,
    name: string,
    img: string,
    description: string,
    options: { [key: string]: number },
    index: number
}

const FoodCard = ({ id, name, img, description, options, index }: FoodData) => {
    const { toast } = useToast();
    const keys = Object.keys(options);
    const [currentOption, setCurrentOption] = useState(keys[0]);
    const [qty, setQty] = useState(1);
    const [isAdding, setIsAdding] = useState(false);
    const { addTocart } = useCartStore();
    const handleAdd = () => {
        setIsAdding(true);
        addTocart({
            id,
            name,
            quantity: qty,
            price: options[currentOption],
            size: currentOption
        });
        toast({
            title: "Added To Cart",
        });
        setIsAdding(false);
    }

    return (
        <div className="w-full overflow-hidden rounded-lg border gradient-bg border-gray-300 shadow-lg flex flex-col md:flex-row gap-3 animate-fadeIn min-h-60" style={{
            animationDelay: `${index * .25}s`,
        }}>
            <div className="relative overflow-hidden w-full h-60 xl:h-auto md:w-[50%]">
                <Image src={img} alt={name} fill sizes='33vw' className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 size-full" />
            </div>
            <div className='p-4 w-full md:w-[50%] my-auto'>
                <h2 className="text-lg xl:text-2xl font-bold">{name}</h2>
                <p className='text-[12px] mt-2 xl:text-[14px] dark:text-slate-100 text-black'>{description}</p>
                <div className='flex gap-4 mt-3 flex-wrap'>
                    <select className='shadow-xl rounded-lg px-2 py-1 text-black dark:bg-white' name='selectField' value={currentOption} onChange={(e) => setCurrentOption(e.target.value)}>
                        {keys.map(key => (
                            <option key={key} value={key}>{key}</option>
                        ))}
                    </select>
                    <Input type='number' name='Quantity' className='font-bold shadow-xl w-1/5 border-none my-auto p-1 bg-white text-black' value={qty} onChange={(e) => setQty(Number(e.target.value))} min={1} />
                    <p className='font-black text-xl my-auto'>₹{options[currentOption] * qty}/-</p>
                </div>
                <Button className='font-semibold mt-3 w-full shadow-xl hover:gradient-bg hover:text-white hover:move-up transition duration-150 ease-in' onClick={handleAdd}>
                    {isAdding ? 'Adding To Cart...' : 'Add To Cart'}
                </Button>
            </div>
        </div>
    )
}

export default FoodCard