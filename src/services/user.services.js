import User from "../models/user.model.js";
import { AppError } from "../error.js";
import { hashPasswordService } from './password.services.js';

export const createUserService = async (payload) => {
    const existingEmail = await User.findOne({ where: { email: payload.email } });

    if(existingEmail != null) {
        throw new AppError('Email is already in use.', 405);
    }

    payload.password = await hashPasswordService(payload.password);
    await User.create(payload);

    return "User created successfully";
}

export const updateUserService = async (payload, userid) => {
    const user = await User.findByPk(userid);
    if(!user) {
        throw new AppError("User not found.", 404);
    }

    if(payload.fullname) {
        user.fullname = payload.fullname;
    }

    if(payload.email) {
        user.email = payload.email;
    }

    if(payload.password) {
        const newPassword = await hashPasswordService(payload.password);
        user.password = newPassword;
    }

    await user.save();
    user.password = "";

    return { ...user };
}

export const getUserByMatchService = async (matchId) => {
    const userMatchs = await UserMatch.find({ matchId });
    const usersIds = userMatchs.map(match => match.userId);
    const users = await User.find({ _id: { $in: usersIds } });

    return { ...users };
}

export const getUserByIdService = async (id) => {
    const user = await User.findById(id);
    if(user == null) {
        throw new AppError("User not found.", 404);
    }

    return { ...user };
}

export const deleteUserService = async (id) => {
    const user = await User.findByIdAndDelete(id);

    return { ...user };
}