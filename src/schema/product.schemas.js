import { z } from "zod";

const createProductSchema = z.object({
    name: z.string().min(3).max(50),
    description: z.string().min(3),
    password: z.string().regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        { message: 'Password must contain at least eight characters, one uppercase letter, one lowercase letter, one number and one special character:' }
    )
});

const updateProductSchema = z.object({
    fullname: z.string().min(3).max(50).optional(),
    email: z.string().email().optional(),
    password: z.string().regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        { message: 'Password must contain at least eight characters, one uppercase letter, one lowercase letter, one number and one special character:' }
    ).optional()
});

export { createProductSchema, updateProductSchema };