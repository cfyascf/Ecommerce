import { DataTypes } from "sequelize";
import { sequelize } from "../startup/db.js";
import Cart from "./cart.model.js";

const Product = sequelize.define(
    'Product',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        stock_qty: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
);

export default Product;