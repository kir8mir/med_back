const pool = require("../database/index");

const actionController = {
  getAll: async (req, res) => {
    try {
      const [rows, fields] = await pool.query("select * from Actions");
      res.json({ data: rows });
    } catch (err) {
      console.log("ERROR:", err);
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      // const [rows, fields] = await pool.query(
      //   "select * from doctors where id = ?",
      //   [id]
      // );
      const [results, metadata] = await pool.query(
        `SELECT * FROM Doctors JOIN Actions ON Actions.doctorId = ${id}`
      );
      res.json({ data: JSON.stringify(results.data) });
    } catch (err) {
      console.log("ERROR:", err);
    }
  },
  create: async (req, res) => {
    try {
      const { doctorId, medicineId, date, quantity } = req.body;
      const sql =
        "insert into Actions (doctorId, medicineId, date, quantity) values (?, ?, ?, ?)";
      const [medicineResult] = await pool.query(
        "SELECT * FROM Medicines WHERE id = ?",
        [medicineId]
      );
      const medicine = medicineResult[0];
      if (quantity > medicine.balance) {
        res.json({ ERROR: "Insufficient balance" });
        return;
      }

      const [rows, fields] = await pool.query(sql, [
        doctorId,
        medicineId,
        date,
        quantity,
      ]);
      res.json({ data: rows });

      const [doctorResult] = await pool.query(
        "SELECT * FROM Doctors WHERE id = ?",
        [doctorId]
      );
      const doctor = doctorResult[0];

      const actionIds = doctor.actionIds || [];
      actionIds.push(rows.insertId);

      await pool.query("UPDATE Doctors SET actionIds = ? WHERE id = ?", [
        JSON.stringify(actionIds),
        doctorId,
      ]);

      const actionMedIds = medicine.actionIds || [];
      actionMedIds.push(rows.insertId);
      const newBalance = medicine.balance - quantity;

      await pool.query("UPDATE Medicines SET actionIds = ? WHERE id = ?", [
        JSON.stringify(actionMedIds),
        medicineId,
      ]);
      await pool.query("UPDATE Medicines SET balance = ? WHERE id = ?", [
        newBalance,
        medicineId,
      ]);
    } catch (err) {
      console.log("ERROR: ", err);
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const [rows, fields] = await pool.query(
        "delete from Actions where id = ?",
        [id]
      );
      res.json({ data: rows });
    } catch (err) {
      console.log("ERROR:", err);
    }
  },
};

module.exports = actionController;
