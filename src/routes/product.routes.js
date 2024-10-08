import { Router } from "express";
import { createProductSchema, updateProductSchema } from "../schema/product.schemas.js";
import { validateBody, validateToken } from "../middlewares/validate.middlewares.js";
import { createProductController, deleteProductController, getAllProductsControler, updateProductController } from "../controllers/product.controllers.js";

const productRoutes = Router();

productRoutes
    .post("", validateToken, validateBody(createProductSchema), createProductController)
    .put("", validateToken, validateBody(updateProductSchema), updateProductController)
    .get("", validateToken, getAllProductsControler)
    .delete("", validateToken, deleteProductController);

export default productRoutes;