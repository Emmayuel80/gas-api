module.exports = (prices) => {
  // Only works if prices are sorted by asc date
  const recentPrices = {};
  for (const price of prices) {
    if (recentPrices[price.product] === undefined) {
      recentPrices[price.product] = price.value;
    }
  }
  return recentPrices;
};
