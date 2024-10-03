import Product from "../models/product.model";

export const createProductService = async (payload) => {
    const existingProduct = await User.findOne({ where: { name: payload.name } });

    if(existingProduct != null) {
        throw new AppError('Product name already registered.', 405);
    }

    const product = await Product.create(payload);

    return { ...product };
}