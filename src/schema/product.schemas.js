import { z } from "zod";

const createProductSchema = z.object({
    name: z.string().min(3),
    description: z.string().min(3),
    price: z.number(),
    stock_qty: z.number()
});

const updateProductSchema = z.object({
    id: z.number(),
    name: z.string().min(3).optional(),
    description: z.string().min(3).optional(),
    price: z.number().optional(),
    stock_qty: z.number().optional()
});

export { createProductSchema, updateProductSchema };