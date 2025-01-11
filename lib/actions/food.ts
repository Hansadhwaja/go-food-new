
'use server';
import { connectDB } from "../db";
import { Food } from "../models/foodModel";

export async function getFoodsByCategories() {
    try {
        await connectDB();
        const groupData = await Food.aggregate([
            {
                $group: {
                    _id: "$CategoryName",
                    items: { $push: {_id:"$_id", name: "$name", img: "$img", options: "$options", description: "$description" } }
                },
            },
            {
                $sort: {
                    _id: 1
                }
            }
        ]);
        return groupData;
    } catch (error: any) {
        throw new Error('Error fetching Foods:', error);
    }
}

