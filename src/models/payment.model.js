import { DataTypes } from "sequelize";
import { sequelize } from "../startup/db.js";

const Payment = sequelize.define(
    'Payment',
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
        },
        method: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false 
        }
    }
)

export default Payment;