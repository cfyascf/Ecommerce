import "dotenv/config";
import "express-async-errors";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import { handleError } from "./middlewares/errorhandler.middlewares.js";

const app = express();

app.use(cors({
    origin: '*'
}));
app.use(express.json());

app.use('/api/v1/users', userRoutes);

app.use(handleError);

export default app;