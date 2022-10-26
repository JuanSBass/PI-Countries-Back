const { Router } = require("express");
const router = Router();
const { Activity, Country } = require("../db");

// router.post("/", async (req, res) => {
//   try {
//     const { name, dificult, duration, season, countryId } = req.body; // MEX
//     const newActivity = await Activity.findOrCreate({
//       where: { name },
//       defaults: { dificult, duration, season },
//     });
//     const country = await Country.findByPk(countryId);
//     country.addActivity(newActivity[0]);
//     res.status(201).send({ newActivity, countryId });
//   } catch (error) {
//     res.status(404).send("Error, datos inválidos.");
//   }
// });


router.post("/", async (req, res) => {
  try {
    const { name, dificult, duration, season, countryIds } = req.body;
    const newActivity = await Activity.create({
      name,
      dificult,
      duration,
      season,
    });
    countryIds.forEach(async (countryId) => {
      const country = await Country.findByPk(countryId);
      country.addActivity(newActivity);
    });
    res.status(201).send({ newActivity, countryIds });
  } catch (error) {
    res.status(404).send("Error, datos inválidos.");
  }
});
//       [MEX, ARG...]

router.get("/", async (req, res) => {
  try {
    const activities = await Activity.findAll();
    res.status(200).send(activities);
  } catch (error) {
    res.status(404).send("Error, datos inválidos.");
  }
});



module.exports = router;