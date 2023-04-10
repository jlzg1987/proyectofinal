const Users = require("./users.models");
const Products = require("./products.models");
const ProductInOrder = require("./productInOrder.models");
const ProductInCart = require("./productInCart.models");
const Order = require("./order.models");
const Cart = require("./cart.models");

const initModels = () => {

  //  order
  Users.hasMany(Order, { foreignKey: "user_id" });
  Order.belongsTo(Users, { foreignKey: "user_id" });

  // car
  Users.hasOne(Cart, { foreignKey: "user_id" });
  Cart.belongsTo(Users, { foreignKey: "user_id" });

  //products
  Users.hasMany(Products, { foreignKey: "user_id" });
  Products.belongsTo(Users, { foreignKey: "user_id" });

  // products car
  Products.hasMany(ProductInCart, { foreignKey: "product_id" });
  ProductInCart.belongsTo(Products, { foreignKey: "product_id" });

  //products order
  Products.hasMany(ProductInOrder, { foreignKey: "product_id" });
  ProductInOrder.belongsTo(Products, { foreignKey: "product_id" });

  // products car
  Cart.hasMany(ProductInCart, { foreignKey: "cart_id", onDelete: 'cascade' });
  ProductInCart.belongsTo(Cart, { foreignKey: "cart_id" });

  //order  products order
  Order.hasMany(ProductInOrder, { foreignKey: "order_id" });
  ProductInOrder.belongsTo(Order, { foreignKey: "order_id" });

};

module.exports = initModels;