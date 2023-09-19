const db = require("../config/db");
const Stations_competitors = {};

Stations_competitors.getByStationId = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const conn = await db.getConnection();
      const rows = await conn.query(
        `SELECT  stations_competitors.cre_id_competitor, stations.name 
            FROM stations_competitors 
            INNER JOIN stations ON stations_competitors.cre_id_competitor = stations.cre_id 
            WHERE stations_competitors.cre_id = ?`,
        [id]
      );
      conn.end();
      resolve(rows);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = Stations_competitors;
