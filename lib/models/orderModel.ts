import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },
    orders: {
        type: Array,
        required: true
    },
    totalPaid:{
        type:Number,
        required:true
    }
}, { versionKey: false, timestamps: true });

export const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
