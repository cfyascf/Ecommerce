import "dotenv/config";
import "express-async-errors";
import express from "express";
import cors from "cors";
import { handleError } from "./middleware/errorHandler.middleware";

const app = express();

app.use(cors({
    origin: '*'
}));
app.use(express.json());

app.use(handleError);

export default app;