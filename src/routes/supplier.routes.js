import { Router } from "express";
import { validateBody, validateToken } from "../middlewares/validate.middlewares.js";
import { getCartController } from "../controllers/cart.controllers.js";
import { createSupplierSchema } from "../schema/supplier.schemas.js";
import { createSupplierController, getAllSuppliersController } from "../controllers/supplier.controllers.js";

const supplierRoutes = Router();

supplierRoutes
    .post("", validateToken, validateBody(createSupplierSchema), createSupplierController)
    .get("", validateToken, getAllSuppliersController);

export default supplierRoutes;