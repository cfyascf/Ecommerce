import { DataTypes } from "sequelize";
import { sequelize } from "../startup/db.js";
import Product from "./product.model.js";

const Cart = sequelize.define(
    'Cart',
    {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "Users",
                key: "id"
            }
        },
        total_price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }
    }
)

export default Cart;