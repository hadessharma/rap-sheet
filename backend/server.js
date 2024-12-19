const express = require("express");
const cors = require("cors");
const pool = require("./database/pool");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/data", async (req, res) => {
  try {
    const queryText = "SELECT * FROM ";
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
