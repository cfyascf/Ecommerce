import { z } from "zod";

const addProductSchema = z.object({
    user_id: z.number(),
    product_id: z.number(),
    qty: z.number().min(0)
});

export { addProductSchema };