const express = require("express");
require("dotenv").config();
const cors = require('cors');
const app = express();
const doctorRouter = require("./routes/doctor.router");
const medicineRouter = require("./routes/medicine.router");
const actionRouter = require("./routes/action.router");
const supplieRouter = require("./routes/supplie.router");

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const router = express.Router();

app.use("/doctors", doctorRouter);
app.use("/medicines", medicineRouter);
app.use("/actions", actionRouter);
app.use("/supplies", supplieRouter);

const doctorController = require("./controller/doctor.controller");
app.use("/login", router.post("/", doctorController.login));

const PORT = process.env.PORT || 3031;

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
