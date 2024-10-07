import { z } from "zod";

const createProductSchema = z.object({
    name: z.string().min(3),
    description: z.string().min(3),
    price: z.number().min(0.1),
    stock_qty: z.number().min(0)
});

const updateProductSchema = z.object({
    name: z.string().min(3).optional(),
    description: z.string().min(3).optional(),
    price: z.number().optional(),
    stock_qty: z.number().optional()
});

export { createProductSchema, updateProductSchema };