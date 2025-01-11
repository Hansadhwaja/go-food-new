'use server';
import mongoose from "mongoose";
import { connectDB } from "../db";
import { Order } from "../models/orderModel";
import User from "../models/user.model";

interface CartItem {
    id: mongoose.Schema.Types.ObjectId;
    name: string;
    quantity: number;
    price: number;
    size: string;
}

interface PlaceOrderProps {
    orderData: CartItem[];
    userId: string;
    totalPaid: number;
}

export async function getOrders(id: string) {
    try {
        await connectDB();
        const objectId = new mongoose.Types.ObjectId(id);
        const orders = await Order.aggregate([
            {
                $match: { userId: objectId }
            },
            {
                $sort: { createdAt: -1 }
            }
        ]);
        return orders;
    } catch (error: any) {
        throw new Error('Error fetching Orders:', error);
    }
}

export async function placeOrder({ orderData, userId, totalPaid }: PlaceOrderProps) {
    try {
        await connectDB();
        const objectId = new mongoose.Types.ObjectId(userId);
        const newOrder = {
            userId: objectId,
            orders: orderData,
            totalPaid
        };
        const createdOrder = await Order.create(newOrder);
        const user = await User.findById(userId);
        user.orders.push(createdOrder._id);
        await user.save();
        return { success: 'Order Placed Successfully' };
    } catch (error: any) {
        throw new Error('Error placing Order:', error);
    }
}