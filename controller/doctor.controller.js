const pool = require("../database/index");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log("Database connected successfully");
  connection.release();
});

const doctorController = {
  getAll: async (req, res) => {
    try {
      const [rows, fields] = await pool.query("select * from Doctors");
      res.json({ data: rows });
    } catch (err) {
      console.log("ERROR:", err);
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const [rows, fields] = await pool.query(
        "select * from Doctors where id = ?",
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
        first_name,
        last_name,
        specialty,
        qualification,
        phone,
        email,
        password,
      } = req.body;
      const sql =
        "insert into Doctors (first_name, last_name, specialty, qualification, phone, email, password) values (?, ?, ?, ?, ?, ?, ?)";

      const doctorsResult = await pool.query("select * from Doctors");
      const doctors = doctorsResult[0];
      if (doctors.some((doctor) => doctor.email === email)) {
        res.json({ ERROR: "This doctor is already in use!" });
        return;
      }

      bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
          return res.status(500).send({
            msg: err,
          });
        } else {
          const [rows, fields] = await pool.query(sql, [
            first_name,
            last_name,
            specialty,
            qualification,
            phone,
            email,
            hash,
          ]);
          res.json({ data: rows });
        }
      });
    } catch (err) {
      console.log("ERROR: ", err);
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    const [doctorResult] = await pool.query(
      "select * from Doctors where email = ?",
      [email]
    );
    const doctor = doctorResult[0];
    if (!doctor) {
      res.json({ ERROR: "Email is incorrect!" });
    }

    bcrypt.compare(password, doctor.password, (bErr, bResult) => {
      if (bResult) {
        const token = jwt.sign(
          { id: doctor.id },
          "the-super-strong-secrect",
          { expiresIn: "3h" }
        );

        res.json({ token: token, ...doctor });
      } else {
        res.json({ ERROR: 'Wrong password!' });
      }
    });
  },

  update: async (req, res) => {
    try {
      const {
        first_name,
        last_name,
        specialty,
        qualification,
        phone,
        email,
        password,
      } = req.body;
      const { id } = req.params;
      const sql =
        "update Doctors set first_name=?, last_name=?, specialty=?, qualification=?, phone=?, email=?, password=? where id = ?";
      const [rows, fields] = await pool.query(sql, [
        first_name,
        last_name,
        specialty,
        qualification,
        phone,
        email,
        password,
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
        "delete from Doctors where id = ?",
        [id]
      );
      res.json({ data: rows });
    } catch (err) {
      console.log("ERROR:", err);
    }
  },
};

module.exports = doctorController;
