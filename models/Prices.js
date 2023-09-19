const db = require("../config/db");
const Prices = {};

Prices.getByStationId = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const conn = await db.getConnection();
      const rows = await conn.query("SELECT * FROM prices WHERE cre_id = ?", [
        id,
      ]);
      conn.end();
      resolve(rows);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = Prices;
