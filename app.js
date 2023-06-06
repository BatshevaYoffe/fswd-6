const express = require("express");
const app = express();
const mysql = require('mysql');

const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/login", function (req, res) {
  const { name, password } = req.body;

  if (!name || !password) {
    res.status(400).send('Bad Request');
    return;
  }
  res.status(200).send('Request succeeded!');

  console.log(`${name}, ${password}`);
  return;
});
// app.get("/login", function (req, res) {
  
//   console.log("hii");
// });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});