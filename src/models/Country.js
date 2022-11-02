const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    countryId: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Sin información"
    },
    capital: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: "Sin información de capital"
    },
    subregion: {
      type: DataTypes.STRING,
      defaultValue: "Sin información"
    },
    population: {
      type: DataTypes.INTEGER,
    },
    area: {
      type: DataTypes.FLOAT,
    },
    maps:{
      type: DataTypes.STRING,
    }
  },
  { timestamps: false });
};
