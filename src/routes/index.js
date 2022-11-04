const { Router } = require("express");
// const { Country } = require("../db");
// const axios = require("axios");
const countriesRouter = require("./countries");
const activitiesRouter = require("./activities");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", countriesRouter);
router.use("/activities", activitiesRouter);

// axios
//   .get("https://restcountries.com/v3/all")
//   .then((response) => response.data)
//   .then((data) => {
//     // const arrData = [];
//     data.forEach((pais) => {
//       Country.create({
//         countryId: pais.cca3,
//         name: pais.translations.spa.common,
//         flag: pais.flags[0],
//         continent: pais.continents
//           ? pais.continent[0]
//           : (pais.continents[0] = "sin información"),
//         capital: pais.capital
//           ? pais.capital[0]
//           : (pais.capital = "sin información"),
//         subregion: pais.subregion
//           ? pais.subregion
//           : (pais.subregion = "sin información"),
//         population: pais.population,
//         maps: pais.maps.googleMaps,
//         area: Math.trunc(pais.area),
//       });
//     });
//     // return arrData;
//   });
// .then((countries) => Country.bulkCreate(countries))

// const getApiCount = async () => {
//   try {
//     const getCount = await axios.get("https://restcountries.com/v3/all");
//     const getInfo = await getCount.data.map((pais) => {
//       return {
//         countryId: pais.cca3,
//         name: pais.translations.spa.common,
//         flag: pais.flags[0],
//         continent: pais.continents
//           ? pais.continent[0]
//           : (pais.continents[0] = "sin información"),
//         capital: pais.capital
//           ? pais.capital[0]
//           : (pais.capital = "sin información"),
//         subregion: pais.subregion
//           ? pais.subregion
//           : (pais.subregion = "sin información"),
//         population: pais.population,
//         maps: pais.maps.googleMaps,
//         area: Math.trunc(pais.area),
//       };
//     });
//     return getInfo;
//   } catch (error) {
//     console.log(error);
//   }
// };


// async function uploadCountry () {
//     try {
//         const countr = await getApiCount();
//         const countDb = await Country.findAll();
//         if(!countDb.length) {
//             const createCount = await Country.bulkCreate(countr)
//             return createCount
//         }else{
//             return countDb;
//         }
//     } catch (error) {
//         console.log(error)
//     }

// }

module.exports = router;
