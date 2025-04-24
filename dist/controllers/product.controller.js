"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.addProduct = exports.getProductById = exports.getProducts = void 0;
const product_model_1 = require("../models/product.model");
//Fetch all products
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_model_1.Product.find();
    res.json(products);
});
exports.getProducts = getProducts;
//Fetch single product
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield product_model_1.Product.findById(req.params.id);
    res.json(product);
});
exports.getProductById = getProductById;
//Add a product
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newProduct = new product_model_1.Product(req.body);
    yield newProduct.save();
    res.json(newProduct);
});
exports.addProduct = addProduct;
//Update a product
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updateProduct = yield product_model_1.Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updateProduct);
});
exports.updateProduct = updateProduct;
//Delete product
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield product_model_1.Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted successfully" });
});
exports.deleteProduct = deleteProduct;
