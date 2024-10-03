import 'dotenv/config'
import { Sequelize } from 'sequelize';

const connectDb = async () => {
    const sequelize = new Sequelize({
        host: process.env.DB_HOST,
        dialect: 'sqlite'
    });

    try {
        await sequelize.sync();
        console.log("Database connection running successfully!");
    } catch(err) {
        console.log("Error connecting to database: " + err);
    }
}

export default connectDb