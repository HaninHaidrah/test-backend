const sectorModel = (sequelize, DataTypes) =>
  sequelize.define("sector", {
    sectorType: { type: DataTypes.STRING, required: true },
    sectorDescription: { type: DataTypes.STRING, required: true },
    sectorimage: { type: DataTypes.STRING, required: true },

  });

module.exports = sectorModel;