// const usersModel = require('./../../db/models/users');
const connection = require("../../db/db");


const login = (req, res) => {
const { email, password } = req.body;
const query = `INSERT INTO users(email, password) VALUES(?,?)`;
const data = [email,password];
connection.query(query,data,(err,result)=>{
	if (err) throw err;
	res.json(result)
})

	
		

	};
	


// const login = (req, res) => {
// 	const { email, password } = req.body;

// 	usersModel
// 		.authenticateBasic(email, password)
// 		.then((result) => {
// 			if (result[1] === 200)
// 				return res.status(result[1]).json({ token: result[0] });

// 			res.status(result[1]).json(result[0]);
// 		})
// 		.catch((err) => {
// 			res.send(err);
// 		});
// };

module.exports = {
	login,
};
