'use client';
import { useCartStore } from "@/store/cartStore";
import CartContent from "./CartContent";
import CartHeader from "./CartHeader";
import { Button } from "./ui/button";
import Link from "next/link";

const Order = () => {
    const { cart } = useCartStore();
    if (cart.length == 0) return (
        <div className="text-center">
            <h1 className="mb-4">Cart Is Empty.Try Adding some Foods.</h1>
            <Link href='/'>
                <Button>Back Home</Button>
            </Link>
        </div>
    );

    return (
        <div className='flex flex-col w-full mb-16 border p-2 rounded-md'>
            <CartHeader />
            <CartContent />
        </div>
    )
}

export default Order