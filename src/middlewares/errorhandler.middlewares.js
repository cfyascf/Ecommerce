import { AppError } from "../error.js";
import { ZodError } from "zod";
import pkg from 'jsonwebtoken';

export const handleError = (err, req, res, next) => {
    const { JsonWebTokenError } = pkg;
    
    if(err instanceof AppError) {
        res.status(err.statusCode).json({ message: err.message });
    }

    if(err instanceof ZodError) {
        res.status(400).json({ message: err.flatten().fieldErrors });
    }

    if(err instanceof JsonWebTokenError) {
        res.status(403).json({ message: err.message });
    }

    console.log(err)
    return res.status(500).json({ message: 'Internal server error.' });
}