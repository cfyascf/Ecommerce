import { z } from "zod";

const createSupplierSchema = z.object({
    name: z.string().min(3),
    adress: z.string().min(3)
});

export { createSupplierSchema };