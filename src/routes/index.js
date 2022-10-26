const { Router } = require("express");
const { Country, Activity } = require("../db");
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
  // .then(data => Country.bulkCreate(data));
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
        area: pais.area
      });
    });
    return arrData;
  })
  .then((country) => Country.bulkCreate(country));


//* <-------------- Countries Routs -------------------->


// router.get("/countries", async (req, res) => {
//   const { name } = req.query;
//   try {
//     if(!name){
//       const countries = await Country.findAll({
//         attributes: ["flag", "name", "continent"]
//       });
//       return res.status(200).send(countries);
//     } else {
//       // name = name[0].toUpperCase();
//       const countries = await Country.findAll({ where: {name}});
//       return res.status(200).send(countries);
//     }
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });


// router.get("/countries/:id", async (req, res) => {
//   const {id} = req.params;
//   try {
//     const country = await Country.findByPk(id, {
//       include: Activity
//     });
//     if(!country){
//       throw new Error(`El id ${id} no se encontró`)
//     };
//     res.status(200).send(country);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// })


//* <-------------- Activities Rout -------------------->

// router.post("/activities", async (req, res) =>{
//   try {
//     const {name, dificult, duration, season, countryId} = req.body;
//     const newActivity = await Activity.findOrCreate({
//       where: {name},
//       defaults: { dificult, duration, season }
//     });
//     const country = await Country.findByPk(countryId);
//     country.addActivity(newActivity[0]);
//     res.status(201).send(newActivity);
//   } catch (error) {
//     res.status(404).send("Error, datos inválidos.");
//   }
// });


module.exports = router;
