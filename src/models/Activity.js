const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('activity', {
    activityId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
    },
    dificult: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5
      }
    },
    duration: {
      type: DataTypes.INTEGER, //? Serán hrs
    },
    season: {
      type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera")
    }
  },
  { timestamps: false });
};