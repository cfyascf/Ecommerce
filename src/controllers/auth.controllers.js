import { loginService } from "../services/auth.services.js";

export const loginController = async (req, res) => {
    const service = await loginService(req.body);

    return res.status(200).json({ token: service.token, user: service.user });
}