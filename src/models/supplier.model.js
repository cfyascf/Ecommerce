import { DataTypes } from "sequelize";
import { sequelize } from "../startup/db.js";

const Supplier = sequelize.define(
    'Supplier',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        adress: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);

export default Supplier;