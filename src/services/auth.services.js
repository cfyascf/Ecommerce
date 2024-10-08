import bcrypt from 'bcryptjs';
import pkg from 'jsonwebtoken';
import 'dotenv/config'
import User from "../models/user.model.js";
import { AppError } from "../error.js";

const { sign } = pkg;

export const loginService = async (payload) => {
    let user = await User.findOne({ where: { email: payload.email } });
    if(!user) {
        throw new AppError("Email not registered.", 401);
    }

    if(!await bcrypt.compare(payload.password, user.password)) {
        throw new AppError("Wrong password.", 403);
    }

    const token = sign(
        {
            userid: user.id
        },
        String(process.env.SECRET),
        {
            expiresIn: String(process.env.EXPIRES_IN)
        }
    )

    user.password = "";
    return { token, user: { ...user } };
}