import { Router } from "express";
import { validateToken } from "../middlewares/validate.middlewares.js";
import { creditCardPaymentController, paymentStatusController, pixPaymentController } from "../controllers/payment.controllers.js";

const paymentRoutes = Router();

paymentRoutes
    .post("/credit-card", validateToken, creditCardPaymentController)
    .post("/pix", validateToken, pixPaymentController)
    .get("/status/:id", validateToken, paymentStatusController);

export default paymentRoutes;