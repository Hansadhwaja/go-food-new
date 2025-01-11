import mongoose from "mongoose";


const foodSchema = new mongoose.Schema({
    CategoryName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    options: {
        type: Array,
        required: true
    },
    description: {
        type: String
    }
});

export const Food = mongoose.models.Food || mongoose.model("Food", foodSchema);

