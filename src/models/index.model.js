import Cart from "./cart.model.js";
import Product from "./product.model.js";

Cart.belongsToMany(Product, { through: "Cart_Products" });
Product.belongsToMany(Cart, { through: "Cart_Products" });