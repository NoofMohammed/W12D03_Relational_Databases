const connection = require("../../db/db");
const bcrypt = require("bcrypt");
const login = (req, res) => {
  const { email, password } = req.body;
  const query = `SELECT * FROM users WHERE email='${email}'`;
  console.log(email, "email");
  connection.query(query, (err, resultQuery) => {
    console.log(resultQuery, "lllll");
    if (err) throw err;
    res.json(resultQuery);
 
  if (resultQuery.length === 0) {
    return res.json("Email does not exist");
  }

  bcrypt.compare(password, resultQuery[0].password, (err, result) => {
    console.log(result, "oooooo");
	if(result === true){
	 res.json("password is Valid");
	}
	else{
		res.json("password is inValid");
	}
  });
});
};

module.exports = {
  login,
};
