import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {};

export async function connectDB() {
    if (connection.isConnected) {
        console.log('Database is already connected.');
        return;
    }

    try {
        const db = await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI!);
        connection.isConnected = db.connections[0].readyState;
        console.log('Database connected Successfully');

    } catch (error: any) {
        console.log('Error Connecting DB:', error);
        process.exit(1);
    }
}