import { Router } from "express";
import { validateBody } from "../middlewares/validate.middlewares.js";
import { loginSchema } from "../schema/auth.schemas.js";
import { loginController } from "../controllers/auth.controllers.js";

const authRoutes = Router();

authRoutes
    .post("", validateBody(loginSchema), loginController);

export default authRoutes;