const db = require("../config/db");
const Stations = {};

Stations.getById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const conn = await db.getConnection();
      const [rows] = await conn.query(
        "SELECT * FROM stations WHERE cre_id = ?",
        [id]
      );
      conn.end();
      resolve(rows);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = Stations;
