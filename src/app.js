import "dotenv/config";
import "express-async-errors";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import { handleError } from "./middlewares/errorhandler.middlewares.js";
import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/product.routes.js";

const app = express();

app.use(cors({
    origin: '*'
}));
app.use(express.json());

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/products', productRoutes);

app.use(handleError);

export default app;