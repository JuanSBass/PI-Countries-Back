const { Router } = require("express");
const { Country } = require("../db");
const axios = require("axios");
const countriesRouter = require("./countries")
const activitiesRouter = require("./activities");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", countriesRouter);
router.use("/activities", activitiesRouter);

axios
.get("https://restcountries.com/v3/all")
.then((response) => response.data)
.then((data) => {
  const arrData = [];
  data.forEach((pais) => {
    arrData.push({
      countryId: pais.cca3,
      name: pais.translations.spa.common,
      flag: pais.flags[0],
      continent: pais.continents[0],
      capital: pais.capital,
      subregion: pais.subregion,
      population: pais.population,
      maps: pais.maps.googleMaps,
      area: pais.area || 0
    });
  });
  return arrData;
})
.then((countries) => Country.bulkCreate(countries))



module.exports = router;
