const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Nerds!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
