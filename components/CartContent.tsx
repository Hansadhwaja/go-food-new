'use client';

import { useCartStore } from "@/store/cartStore";
import OrderItem from "./OrderItem";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Loader from "./Loader";
import { useRouter } from "next/navigation";
import { placeOrder } from "@/lib/actions/order";
import { getUserIdByClerkId } from "@/lib/actions/user";

const CartContent = () => {
    const { cart, total, clearCart } = useCartStore();
    const [isProcessing, setIsProcessing] = useState(false);
    const { toast } = useToast();
    const router = useRouter();


    const handleOrder = async () => {
        const id = await getUserIdByClerkId();
        const totalPaid = total().toFixed(2);
        setIsProcessing(true);
        try {
            await new Promise<void>((resolve) =>
                setTimeout(resolve, 2000)
            );
            toast({
                title: "Payment Successful",
            });
            const order = await placeOrder({ orderData: cart, userId: id, totalPaid: Number(totalPaid) });

            if (order.success) {
                router.push('/');
                clearCart();
                toast({
                    title: order.success,
                });  
            }
            else {
                toast({
                    title: "Error in placing Order",
                    variant: "destructive",
                });
            }
        } catch (error) {
            toast({
                title: "Something Went Wrong",
                variant: "destructive",
            });
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <>
            <div>
                {cart.map((item, index) => (
                    <div key={`${item.id.toString()}-${item.size}`}>
                        <OrderItem item={item} index={index} />
                        <div className="border mt-2 mb-8 gradient-bg animate-fromUpper dark:border-white" />
                    </div>
                ))}
            </div>
            <p className="text-right">
                Total Amount:
                <span className="font-bold text-red-400 ml-2">₹{total().toFixed(2)}/-</span>
            </p>
            <AlertDialog>
                <AlertDialogTrigger
                    className="gradient-bg mx-auto w-full sm:w-[200px] hover:animate-dance mt-2 rounded-lg px-4 py-2"
                    disabled={isProcessing || cart.length === 0}
                >
                    {isProcessing ? (
                        <div className="flex-center gap-2">
                            <Loader />
                            <span>Processing</span>
                        </div>
                    ) : "Place Order"}

                </AlertDialogTrigger>
                <AlertDialogContent className="border dark:border-white">
                    <AlertDialogHeader>
                        <AlertDialogTitle>Confirm Your Order</AlertDialogTitle>
                        <AlertDialogDescription>
                            Total Payable Amount:{" "}
                            <span className="font-bold text-red-400 text-xl">
                                ₹{total().toFixed(2)}/-
                            </span>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel disabled={isProcessing}>
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction onClick={handleOrder}>
                            {isProcessing ? (
                                <div className="flex gap-2">
                                    <Loader />
                                    <span>Processing</span>
                                </div>
                            ) : "Pay"}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
};

export default CartContent;
