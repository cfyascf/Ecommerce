import { createUserService, deleteUserService, getUserByIdService, getUserByMatchService, updateUserService } from "../services/user.services.js";

export const createUserController = async (req, res) => {
    const service = await createUserService(req.body);

    res.status(201).json({ message: service });
}

export const updateUserController = async (req, res) => {
    const service = await updateUserService(req.body, res.locals.userid);

    res.status(200).json({ data: service });
}

export const getUserByMatchController = async (req, res) => {
    const service = await getUserByMatchService(String(req.query.id));

    res.status(200).json({ data: service });
}

export const getUserByIdController = async (req, res) => {
    const service = await getUserByIdService(String(req.query.id));

    res.status(200).json({ data: service });
}

export const deleteUserController = async (req, res) => {
    const service = await deleteUserService(res.locals.userid);

    res.status(200).json({ data: service });
}