"use strict";
require("dotenv").config();
const userModel = require("./userModel.js");
const sectorModel = require("./sectorModel");

const Collection = require("../models/data-collection");

const { Sequelize, DataTypes } = require("sequelize");
const { use } = require("../routes/userRoute.js");

const DATABASE_URL = "postgres://localhost:5432/testing";
// process.env.NODE_ENV === "test" ? "sqlite:memory:" : process.env.DATABASE_URL;

let sequelizeOptions =
  process.env.NODE_ENV === "production"
    ? {
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }
    : {};

const sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);
const user = userModel(sequelize, DataTypes);
const sector = sectorModel(sequelize, DataTypes);

// relation between user and sector_id
user.hasMany(sector, { foreignKey: "sectorId", sourceKey: "id" });
sector.belongsTo(user, { foreignKey: "sectorId", targetKey: "id" });

module.exports = {
  db: sequelize,
  user: new Collection(user),
  sector: new Collection(sector),
};
