import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: { type: String, required: true},
    productPrice: { type: Number, required: true },
});

export const Product = mongoose.model("Product", productSchema);