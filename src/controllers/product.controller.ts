import { Request, Response } from "express";
import { Product } from "../models/product.model";

//Fetch all products
export const getProducts = async (req: Request, res: Response) => {
    const products = await Product.find()
    res.json(products)
};

//Fetch single product
export const getProductById = async (req: Request, res: Response) => {
    const product = await Product.findById(req.params.id);
    res.json(product)
};

//Add a product
export const addProduct = async (req: Request, res: Response) => {
    const newProduct = new Product(req.body)
    await newProduct.save()
    res.json(newProduct)
};

//Update a product
export const updateProduct = async (req: Request, res: Response) => {
    const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(updateProduct)
};

//Delete product
export const deleteProduct = async (req: Request, res: Response) => {
    await Product.findByIdAndDelete(req.params.id)
    res.json({ message: "Product deleted successfully"})
};