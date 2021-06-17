const connection = require("../../db/db");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const login = (req, res) => {
  const { email, password } = req.body;

  const query = `SELECT * FROM users WHERE email='${email}'`;
  console.log(email, "email");

  connection.query(query, (err, resultQuery) => {
    if (err) throw err;

    if (resultQuery.length === 0) {
      return res.json("Email does not exist");
    }

    bcrypt.compare(password, resultQuery[0].password, (err, result) => {
      if (err) {
        return res.json("password is inValid");
      }
      const payload = {
        id: resultQuery[0].id,
      };
      const options = {
        expiresIn: "60m",
      };
      const token = jwt.sign(payload, process.env.SECRET, options);
      console.log(token);
      res.json(token);
    });
  });
};

module.exports = {
  login,
};
