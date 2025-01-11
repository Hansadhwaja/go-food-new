'use client';
import mongoose from "mongoose";
import { Button } from "./ui/button";
import { useCartStore } from "@/store/cartStore";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";

interface CartItem {
    id: mongoose.Schema.Types.ObjectId;
    name: string;
    quantity: number;
    price: number;
    size: string;
}
const OrderItem = ({ item, index }: { item: CartItem, index: number }) => {

    const [qty, setQty] = useState(item.quantity);
    const {removeFromCart, updateQuantity } = useCartStore();

    const handleremove = (id: mongoose.Schema.Types.ObjectId, size: string) => {
        removeFromCart(id, size);
    };

    useEffect(() => {
        updateQuantity(item.id, item.size, qty);
    }, [qty]);

    return (
        <>
            <div className="grid grid-cols-12 p-2 gap-4 text-[10px] lg:text-xl">
                <p>{index + 1}</p>
                <p className='col-span-2'>{item.name}</p>
                <p className='col-span-2'>{item.size}</p>
                <p className='col-span-2'>{item.price}</p>
                <p className='col-span-2'>
                    <label htmlFor="quantity" ></label>
                    <Input
                        type='number'
                        className='font-bold border-none'
                        id="quantity"
                        value={qty}
                        onChange={(e) => setQty(Number(e.target.value))}
                        min={1}
                    />
                </p>
                <p className="text-right col-span-2">₹{item.price * qty}/-</p>
                <p>
                    <Button
                        className="bg-transparent transition delay-100 ease-out hover:bg-transparent text-black max-sm:size-[24px] text-lg shadow-xl hover:animate-dance dark:bg-white"
                        onClick={() => handleremove(item.id, item.size)}
                    >
                        X
                    </Button>
                </p>
            </div>

        </>
    );
};

export default OrderItem;
