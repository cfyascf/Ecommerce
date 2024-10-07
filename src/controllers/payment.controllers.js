import { creditCardPaymentService, pixPaymentService, paymentStatusService } from "../services/payment.services.js"

export const creditCardPaymentController = async (req, res) => {
    const service = await creditCardPaymentService(res.locals.userid);

    res.status(200).json({ data: service });
}

export const pixPaymentController = async (req, res) => {
    const service = await pixPaymentService(res.locals.userid);

    res.status(200).json({ data: service });
}

export const paymentStatusController = async (req, res) => {
    const service = await paymentStatusService(req.params.id);

    res.status(200).json({ data: service });
}