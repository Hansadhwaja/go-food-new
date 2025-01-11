
'use server';
import { currentUser } from "@clerk/nextjs/server"
import User from "../models/user.model";
import { connectDB } from "../db";

export async function getUser() {
    try {
        return await currentUser();
    } catch (error: any) {
        throw new Error('Error fetching User:', error)
    }
};

export async function getUserIdByClerkId() {
    try {
        await connectDB();
        const user=await currentUser();
        const dbUser=await User.findOne({clerkId:user?.id});
        return dbUser._id.toString();
    } catch (error: any) {
        throw new Error('Error fetching User:', error)
    }
};

export async function createUser() {
    try {
        await connectDB();
        const user = await currentUser();
        const existingUser = await User.findOne({ clerkId: user?.id });
        if (existingUser) {
            console.log('User already exists');
            return null;
        }
        const newUser = {
            name: user?.firstName + ' ' + user?.lastName,
            username: user?.firstName,
            email: user?.emailAddresses[0].emailAddress,
            clerkId: user?.id
        };
        await User.create(newUser);
        console.log('user Created Successfully');
        return null;
    } catch (error: any) {
        throw new Error(`Error creating New User:${error.message}`);
    }
};