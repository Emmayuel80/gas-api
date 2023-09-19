const express = require("express");
const router = express.Router();
const Stations = require("../../models/Stations");
const Stations_brands = require("../../models/Stations_brands");
const Prices = require("../../models/Prices");
const getPriceDifferences = require("../../services/getPriceDifferences");

router.get("/", async (req, res) => {
  const id = req.query.id;

  const station = await Stations.getById(id);
  const brands = await Stations_brands.getByStationId(id);
  const prices = await Prices.getByStationId(id);

  // Remove duplicate brands
  const setOfBrands = [...new Set(brands.map((brand) => brand.name))];

  const priceDifferences = await getPriceDifferences(id, prices);
  res.json({
    name: station.name,
    location: `x: ${station.location_x}, y: ${station.location_y}`,
    brands: setOfBrands,
    prices: prices.map((price) => {
      return {
        price: price.value,
        product: price.product,
        date: price.date,
      };
    }),
    priceDifferences: priceDifferences,
  });
});
module.exports = router;
