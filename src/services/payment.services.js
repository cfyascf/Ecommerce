import { AppError } from "../error.js";
import Cart from "../models/cart.model.js";
import CartProducts from "../models/cartproducts.model.js";
import Payment from "../models/payment.model.js";
import Product from "../models/product.model.js";
import User from "../models/user.model.js"

export const creditCardPaymentService = async (userid) => {
    const user = await User.findByPk(userid);
    if(!user) {
        throw new AppError("User not found.", 404);
    }

    const cart = await Cart.findOne({ where: { user_id: userid } });
    if(!cart) {
        throw new AppError("Cart not found.", 404);
    }

    const cartProducts = await CartProducts.findAll({ where: { CartId: cart.id } });
    if(cartProducts.length == 0) {
        throw new AppError("Cart is empty.", 400);
    }

    const payment = await Payment.create({
        user_id: user.id,
        total_price: cart.total_price,
        method: "creditcard",
        status: "concluded"
    });

    cart.total_price = 0.0;
    await cart.save();

    cartProducts.forEach(async product => {
        await product.destroy();
    });

    return { payment };
}

export const pixPaymentService = async (userid) => {
    const user = await User.findByPk(userid);
    if(!user) {
        throw new AppError("User not found.", 404);
    }

    const cart = await Cart.findOne({ where: { user_id: userid } });
    if(!cart) {
        throw new AppError("Cart not found.", 404);
    }

    const cartProducts = await CartProducts.findAll({ where: { CartId: cart.id } });
    if(cartProducts.length == 0) {
        throw new AppError("Cart is empty.", 400);
    }

    cartProducts.forEach(async cartProduct => {
        const product = await Product.findByPk(cartProduct.ProductId);
        if(product.stock_qty == 0) {
            throw new AppError("Product is not in stock.", 400);
        }
    });

    const payment = await Payment.create({
        user_id: user.id,
        total_price: cart.total_price,
        method: "pix",
        status: "concluded"
    });

    cartProducts.forEach(async cartProduct => {
        const product = await Product.findByPk(cartProduct.ProductId);
        product.stock_qty--;
        await product.save();

        await cartProduct.destroy();
    });

    cart.total_price = 0.0;
    await cart.save();

    return { payment };
}

export const paymentStatusService = async (paymentid) => {
    const payment = await Payment.findByPk(paymentid);
    if(!payment) {
        throw new AppError("Payment not found.", 404);
    }

    return { payment_status: payment.status };
}