const connection = require("../../db/db");
const bcrypt = require("bcrypt");
const salt = 10;
const createNewAuthor = async (req, res) => {
  console.log(req.body, "hhhh");

  const { firstName, lastName, age, country, email, password, role_id } =
    req.body;
  const query = `INSERT INTO users(firstName, lastName, age, country, email, password, role_id ) VALUES(?,?,?,?,?,?,?)`;
  const passHash = await bcrypt.hash(password, salt);
  const data = [firstName, lastName, age, country, email, passHash, role_id];

  connection.query(query, data, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

module.exports = {
  createNewAuthor,
};
