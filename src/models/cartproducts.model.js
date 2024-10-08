import { DataTypes } from "sequelize";
import { sequelize } from "../startup/db.js";
import Product from "./product.model.js";
import Cart from "./cart.model.js";

const CartProducts = sequelize.define(
    'Cart_Products',
    {
        qty: {
            type: DataTypes.INTEGER
        }
    }
)

Product.belongsToMany(Cart, { through: CartProducts });
Cart.belongsToMany(Product, { through: CartProducts });

export default CartProducts;