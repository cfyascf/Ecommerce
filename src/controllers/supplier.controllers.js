import { createSupplierService, getAllSuppliersService } from "../services/supplier.services.js";

export const createSupplierController = async (req, res) => {
    const service = await createSupplierService(req.body);

    res.status(201).json({ data: service });
}

export const getAllSuppliersController = async (req, res) => {
    const service = await getAllSuppliersService();

    res.status(200).json({ data: service });
}