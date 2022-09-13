const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Basket = sequelize.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BasketCard = sequelize.define("basket_card", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Card = sequelize.define("card", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  author: { type: DataTypes.STRING, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
  avatar: { type: DataTypes.STRING, allowNull: false },
  categoryId: { type: DataTypes.INTEGER, allowNull: false },
});

const Category = sequelize.define("category", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

User.hasOne(Basket);
Basket.belongsTo(User);

Category.hasMany(Card);
Card.belongsTo(Category);

Card.hasMany(BasketCard);
BasketCard.belongsTo(Card);

Basket.hasMany(BasketCard);
BasketCard.belongsTo(Basket);

module.exports = {
  User,
  Basket,
  Card,
  BasketCard,
  Category,
};
