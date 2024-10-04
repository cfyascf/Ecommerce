import { AppError } from "../error";
import Cart from "../models/cart.model"
import Product from "../models/product.model";
import { sequelize } from "../startup/db";

export const addProductService = async (payload) => {
    const [ cart ] = await Cart.findOrCreate({
        where: { user_id: payload.user_id },
        defaults: {
            total_price: 0.0
        }
    });

    const product = await Product.findByPk(payload.product_id);
    if(!product) {
        throw new AppError("Product not found.", 404);
    }

    const cartProduct = sequelize.models.Cart_Products;
    await cartProduct.create({
        cart_id: payload.cart_id,
        product_id: payload.product_id,
        qty: payload.qty
    });

    return "Product added to cart successfully!";
}