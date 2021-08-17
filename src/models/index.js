"use strict";
require("dotenv").config();
const userModel = require("./users");
const { Sequelize, DataTypes } = require("sequelize");
const foodModel = require("./food/model");
const clothesModel = require("./clothes/model");
const dataCollection = require("./data-collection");

const DATABASE_URL =
  process.env.NODE_ENV == "test"
    ? "sqlite:memory"
    : process.env.DATABASE_URL;

const sequelize = new Sequelize(DATABASE_URL);
const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  users: userModel(sequelize, DataTypes),
  food: new dataCollection(food),
  clothes: new dataCollection(clothes),
};