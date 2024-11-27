import { AppError } from "../error.js";
import Supplier from "../models/supplier.model.js";

export const createSupplierService = async (payload) => {
    const existingSupplier = await Supplier.findOne({ where: { name: payload.name } });

    if(existingSupplier != null) {
        throw new AppError('Supplier name already registered.', 405);
    }

    const supplier = await Supplier.create(payload);

    return { ...supplier };
}

export const getAllSuppliersService = async () => {
    const suppliers = await Supplier.findAll();

    return { ...suppliers };
}