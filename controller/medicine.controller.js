const pool = require("../database/index");

pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log("Database connected successfully");
  connection.release();
});

const medicineController = {
  getAll: async (req, res) => {
    try {
      const [rows, fields] = await pool.query("select * from Medicines");
      res.json({ data: rows });
    } catch (err) {
      console.log("ERROR:", err);
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const [rows, fields] = await pool.query(
        "select * from Medicines where id = ?",
        [id]
      );
      res.json({ data: rows });
    } catch (err) {
      console.log("ERROR:", err);
    }
  },
  create: async (req, res) => {
    try {
      const {
        name,
        active_ingredient,
        manufacturer,
        form,
        strength,
        route_of_administration,
        indication,
        contraindication,
        side_effects,
        storage_conditions,
        expiration_date,
        prescription_required,
        balance
      } = req.body;
      const sql =
        "insert into Medicines (name, active_ingredient, manufacturer, form, strength, route_of_administration, indication, contraindication, side_effects, storage_conditions, expiration_date, prescription_required, balance) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

      const [rows, fields] = await pool.query(sql, [
        name,
        active_ingredient,
        manufacturer,
        form,
        strength,
        route_of_administration,
        indication,
        contraindication,
        side_effects,
        storage_conditions,
        expiration_date,
        prescription_required,
        balance
      ]);
      res.json({ data: rows });
    } catch (err) {
      console.log("ERROR: ", err);
    }
  },
  update: async (req, res) => {
    try {
      const {
        name,
        active_ingredient,
        manufacturer,
        form,
        strength,
        route_of_administration,
        indication,
        contraindication,
        side_effects,
        storage_conditions,
        expiration_date,
        prescription_required,
        balance
      } = req.body;
      const { id } = req.params;
      const sql =
        "update Medicines set name=?, active_ingredient=?, manufacturer=?, form=?, strength=?, route_of_administration=?, indication=?, contraindication=?, side_effects=?, storage_conditions=?, expiration_date=?, prescription_required=?, balance=?  where id = ?";
      const [rows, fields] = await pool.query(sql, [
        name,
        active_ingredient,
        manufacturer,
        form,
        strength,
        route_of_administration,
        indication,
        contraindication,
        side_effects,
        storage_conditions,
        expiration_date,
        prescription_required,
        balance,
        id,
      ]);
      res.json({ data: rows });
    } catch (err) {
      console.log("ERROR: ", err);
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const [rows, fields] = await pool.query(
        "delete from Medicines where id = ?",
        [id]
      );
      res.json({ data: rows });
    } catch (err) {
      console.log("ERROR:", err);
    }
  },
};

module.exports = medicineController;
