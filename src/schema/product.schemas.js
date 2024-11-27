import { z } from "zod";

const createProductSchema = z.object({
    name: z.string().min(3),
    description: z.string().min(3),
    price: z.number().min(0.1),
    stock_qty: z.number().min(0)
});

const updateProductSchema = z.object({
    name: z.union([z.string().min(3), z.string().length(0), z.null()]).optional(),
    description: z.union([z.string().min(3), z.string().length(0), z.null()]).optional(),
    price: z.union([z.number(), z.null()]).optional(),
    stock_qty: z.union([z.number(), z.null()]).optional(),
});


export { createProductSchema, updateProductSchema };