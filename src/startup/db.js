import 'dotenv/config'
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    process.env.DATABASE, process.env.DB_USER, process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mssql'
    }
);

const connectDb = async () => {
    try {
        await sequelize.sync();
        console.log("Database connection running successfully!");
    } catch(err) {
        console.log("Error connecting to database: " + err);
    }
}

export { sequelize, connectDb };