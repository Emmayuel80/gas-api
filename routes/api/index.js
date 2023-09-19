const express = require("express");
const router = express.Router();
const Stations = require("../../models/Stations");
const Stations_brands = require("../../models/Stations_brands");
const Prices = require("../../models/Prices");

router.get("/", async (req, res) => {
  const id = "PL/1000/EXP/ES/2015";
  console.log(await Stations.getById(id));
  console.log(await Stations_brands.getByStationId(id));
  console.log(await Prices.getByStationId(id));
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});
module.exports = router;
