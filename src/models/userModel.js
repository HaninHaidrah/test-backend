const userModel = (sequelize, DataTypes) =>
  sequelize.define("users", {
    userName: { type: DataTypes.STRING, required: true },
    sectorId: {
      type: DataTypes.STRING,
      required: true,
    },
    agreeToterms: {
      type: DataTypes.BOOLEAN,
      required: true,
    },
  });

module.exports = userModel;
