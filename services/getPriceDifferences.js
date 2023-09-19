const Stations_competitors = require("../models/Stations_competitors");
const Stations = require("../models/Stations");
const Prices = require("../models/Prices");
const findRecentPriceForEachProduct = require("./findRecentPriceForEachProduct");

module.exports = async (cre_id, pricesArr) => {
  const competitors = await Stations_competitors.getByStationId(cre_id);
  const ownPrices = findRecentPriceForEachProduct(pricesArr);

  const differences = {};

  for (const competitor of competitors) {
    const prices = await Prices.getByStationId(competitor.cre_id_competitor);
    const competitorPrices = findRecentPriceForEachProduct(prices);

    for (const product in ownPrices) {
      if (competitorPrices[product]) {
        differences[competitor.name] = {
          product: product,
          own: ownPrices[product],
          competitor: competitorPrices[product],
          difference: ownPrices[product] - competitorPrices[product],
        };
      }
    }
  }

  return differences;
};
