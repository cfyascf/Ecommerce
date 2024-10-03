import { Router } from "express";
import { createUserController, deleteUserController, getUserByIdController, getUserByMatchController, updateUserController } from "../controllers/user.controllers.js";
import { validateBody, validateToken } from "../middlewares/validate.middlewares.js";
import { createUserSchema, updateUserSchema } from "../schema/user.schemas.js";

const userRoutes = Router();

userRoutes
    .post("", validateBody(createUserSchema), createUserController)
    .put("", validateBody(updateUserSchema), validateToken, updateUserController)
    .get("/match", getUserByMatchController)
    .get("", getUserByIdController)
    .delete("", validateToken, deleteUserController);

export default userRoutes;