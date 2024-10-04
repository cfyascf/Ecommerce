import { AppError } from "../error.js";
import Product from "../models/product.model.js";

export const createProductService = async (payload) => {
    const existingProduct = await Product.findOne({ where: { name: payload.name } });

    if(existingProduct != null) {
        throw new AppError('Product name already registered.', 405);
    }

    const product = await Product.create(payload);

    return { ...product };
}

export const updateProductService = async (payload) => {
    const product = await Product.findByPk(payload.id);
    if(!product) {
        throw new AppError("Product not found.", 404);
    }

    if(payload.name) {
        product.name = payload.name;
    }

    if(payload.description) {
        product.description = payload.description;
    }

    if(payload.price) {
        product.price = payload.price;
    }
    
    if(payload.stock_qty) {
        product.stock_qty = payload.stock_qty;
    }

    await product.save();

    return { ...product };
}

export const getAllProductsService = async () => {
    const products = await Product.findAll();

    return { ...products };
}

export const deleteProductService = async (productid) => {
    const product = await Product.findByPk(productid);
    if(!product) {
        throw new AppError("Product not found.", 404);
    }

    const response = { ...product };
    await product.destroy();

    return response;
}
