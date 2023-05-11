const pool = require("../database/index");

const supplieController = {
  getAll: async (req, res) => {
    try {
      const [rows, fields] = await pool.query("select * from Supplies");
      res.json({ data: rows });
    } catch (err) {
      console.log("ERROR:", err);
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const [rows, fields] = await pool.query(
        "select * from Supplies where id = ?",
        [id]
      );
      res.json({ data: rows });
    } catch (err) {
      console.log("ERROR:", err);
    }
  },
  create: async (req, res) => {
    try {
      const { meds } =
        req.body;
        const sql = 'insert into Supplies (meds) values (?)';
        const [medicineResult] = await pool.query(
          "SELECT * FROM Medicines WHERE id = ?",
          [meds.medId]
        );
        const medicine = medicineResult[0];
        if (!medicine) {
          res.json({ ERROR: 'Medicine does not exist'});
          return;
        }

        const jsonString = JSON.stringify(meds);
        const [rows, fields] = await pool.query(sql, [jsonString]);
        res.json({ data: rows})       

        await pool.query("UPDATE Medicines SET balance = ? WHERE id = ?", [
          medicine.balance + meds.quantity,
          medicine.id,
        ]);
    } catch (err){
      console.log('ERROR: ', err);
    }
  },
  update: async (req, res) => {
    try {
      const { meds } =
        req.body;
        const { id } = req.params;
       const sql = 'update Supplies set meds=? where id = ?';
       const [rows, fields] = await pool.query(sql, [meds]);
       res.json({ data: rows});
    } catch (err) {
      console.log('ERROR: ', err);
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const [rows, fields] = await pool.query('delete from Supplies where id = ?', [id]);
      res.json({ data: rows})
    } catch(err) {
      console.log('ERROR:', err);
    }
  },
};

module.exports = supplieController;
