import { addProductService, getCartService, removeProductService } from "../services/cart.services.js"

export const addProductController = async (req, res) => {
    const service = await addProductService(Number(req.params.id), res.locals.userid);

    res.status(200).json({ message: service });
}

export const removeProductController = async (req, res) => {
    const service = await removeProductService(Number(req.params.id), res.locals.userid);

    res.status(200).json({ message: service });
}

export const getCartController = async (req, res) => {
    const service = await getCartService(res.locals.userid);

    res.status(200).json({ message: service });
}