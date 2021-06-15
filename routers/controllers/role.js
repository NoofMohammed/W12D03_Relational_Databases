const connection = require("../../db/db");

const createNewRole = (req, res) => {
  console.log("777",req.body)
  const {role} = req.body;
  const query = `INSERT INTO roles (role) VALUES (?)`;
  const data = [role];
  connection.query(query, data, (err, result) => {
    if (err) throw err;
    console.log("ee",result)

    res.json(result);
  });
};

module.exports = {
  createNewRole,
};
