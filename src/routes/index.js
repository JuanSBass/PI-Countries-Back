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
  data.map((pais) => {
    arrData.forEach({
      countryId: pais.cca3,
      name: pais.translations.spa.common,
      flag: pais.flags[0],
      continent: pais.continents[0] && "sin información",
      capital: pais.capital && "sin información",
      subregion: pais.subregion && "sin información",
      population: pais.population && "sin información",
      maps: pais.maps.googleMaps && "sin información",
      area: pais.area && "sin información",
    });
  });
  return arrData;
})
.then((country) => Country.bulkCreate(country));


module.exports = router;
