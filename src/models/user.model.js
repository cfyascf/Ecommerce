import { DataTypes } from "sequelize";
import { sequelize } from "../startup/db.js";

const User = sequelize.define(
    "User",
    {
        fullname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
)

export default User;