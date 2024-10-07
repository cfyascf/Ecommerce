import { AppError } from "../error.js";
import Cart from "../models/cart.model.js"
import CartProducts from "../models/cartproducts.model.js";
import Product from "../models/product.model.js";
import User from "../models/user.model.js";

export const addProductService = async (productid, userid) => {
    const [ cart ] = await Cart.findOrCreate({
        where: { user_id: userid },
        defaults: {
            total_price: 0.0
        }
    });

    const product = await Product.findByPk(productid);
    if(!product) {
        throw new AppError("Product not found.", 404);
    }

    if(product.stock_qty <= 0) {
        throw new AppError("Product is no longer in stock.", 400);
    }

    const existingProduct = await CartProducts.findOne({ where: { ProductId: productid, CartId: cart.id } });
    if(existingProduct) {
        existingProduct.qty++;
        await existingProduct.save();
    } else {
        await CartProducts.create({
            CartId: cart.id,
            ProductId: product.id,
            qty: 1
        });
    }

    cart.total_price += product.price;
    await cart.save();

    return "Product added to cart successfully!";
}

export const removeProductService = async (productid, userid) => {
    const product = await Product.findByPk(productid);
    if(!product) {
        throw new AppError("Product not found.", 404);
    }

    const cart = await Cart.findOne({ where: { user_id: userid } });
    if(!cart) {
        throw new AppError("Cart not found.", 404);
    }

    const existingProduct = await CartProducts.findOne({ where: { ProductId: productid, CartId: cart.id } });
    if(existingProduct.qty > 1) {
        existingProduct.qty--;
        await existingProduct.save();
    } else {
        await CartProducts.destroy({ where: { CartId: cart.id, ProductId: product.id } });
    }

    return "Product removed from cart successfully!";
}

export const getCartService = async (userid) => {
    const user = await User.findByPk(userid);
    if(!user) {
        throw new AppError("User not found.", 404);
    }

    const cart = await Cart.findOne({ where: { user_id: userid } });
    if(!cart) {
        throw new AppError("Cart not found.", 404);
    }

    const cartProducts = await CartProducts.findAll({ where: { CartId: cart.id } });

    return { ...cart, ...cartProducts };
}