const { Router } = require("express");
const router = Router();
const { Country, Activity } = require("../db");

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if(!name){
      const countries = await Country.findAll({
        include: Activity
      });
      return res.status(200).send(countries);
    } else {
      //? name = name[0].toUpperCase(); AQUI ENTRA SI HAY QUERY
      const countries = await Country.findAll({
        include: Activity
      });
      const countryFiltrado = countries.filter(pais => pais.name.toLowerCase().includes(name.toLowerCase()))
      
      countryFiltrado.length < 1 
      ? res.status(404).send("País inexistente")
      : res.status(200).send(countryFiltrado);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});


router.get("/:id", async (req, res) => {
  const {id} = req.params;
  try {
    const country = await Country.findByPk(id, {
      include: Activity
    });
    if(!country){
      throw new Error(`El id ${id} no se encontró`)
    };
    res.status(200).send(country);
  } catch (error) {
    res.status(400).send(error.message);
  }
})

module.exports = router;