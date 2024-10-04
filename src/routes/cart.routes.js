import { Router } from "express";
import { validateToken } from "../middlewares/validate.middlewares.js";
import { addProductController, getCartController, removeProductController } from "../controllers/cart.controllers.js";

const cartRoutes = Router();

cartRoutes
    .post("/add/:id", validateToken, addProductController)
    .post("/remove/:id", validateToken, removeProductController)
    .get("", validateToken, getCartController);

export default cartRoutes;