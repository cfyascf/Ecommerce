export const createUserService = async (payload) => {
    const existingEmail = await User.findOne({ where: { email: payload.email } });

    if(existingEmail != null) {
        throw new AppError('Email is already in use.', 405);
    }

    payload.password = await hashPasswordService(payload.password);
    await User.create(payload);

    return "User created successfully";
}