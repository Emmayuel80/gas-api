const db = require("../config/db");
const Stations_brands = {};

Stations_brands.getByStationId = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const conn = await db.getConnection();
      const rows = await conn.query(
        `SELECT stations_brands.id, brands.name 
        FROM stations_brands 
        INNER JOIN brands ON stations_brands.id_brand = brands.id 
        WHERE cre_id = ?`,
        [id]
      );
      conn.end();
      resolve(rows);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = Stations_brands;
