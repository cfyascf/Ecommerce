import { verify } from "jsonwebtoken";
import { AppError } from "../error";

export const validateBody = (schema) => (req, res, next) => {
    const validated = schema.parse(req.body);
    req.body = validated;

    return next();
}

export const validateToken = (req, res, next) => {
    const jwt = req.headers.authorization;
    if(!jwt) {
        throw new AppError("JWT token is missing.", 401);
    }

    const [_bearer, token] = jwt.split(" ");

    verify(
        token, 
        String(process.env.SECRET),
        (err, decoded) => {
            try {
                res.locals.userid = decoded.userid
            } catch(err) {
                throw new AppError("Invalid JWT token.", 401);
            }
        }); 

    return next();
}