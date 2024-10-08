import { createProductService, deleteProductService, getAllProductsService, updateProductService } from "../services/product.services.js";

export const createProductController = async (req, res) => {
    const service = await createProductService(req.body);

    res.status(201).json({ message: service });
}

export const updateProductController = async (req, res) => {
    const service = await updateProductService(req.body, req.params.id);

    res.status(200).json({ data: service });
}

export const getAllProductsControler = async (req, res) => {
    const service = await getAllProductsService();

    res.status(200).json({ data: service });
}

export const deleteProductController = async (req, res) => {
    const service = await deleteProductService(req.query.productid);

    res.status(200).json({ data: service });
}