const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "banco",
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "INSERT INTO usuarios(email, password) VALUES ('Vitor','231')",
    (err, resut) => {
      res.send(err);
    }
  );
});

app.listen(3001, () => {
  console.log("rodando na porta 3001");
});
