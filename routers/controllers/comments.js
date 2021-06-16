// const commentsModel = require('./../../db/models/comments');
const connection = require("../../db/db");

const createNewComment = (req, res) => {
	const articleId = req.params.id;

	const { comment,article,commenter} = req.body;
	const data = [comment,article,commenter]
	const query = `INSERT INTO comments(comment,article_id,commenter) VALUES (?,?,?) WHERE article_id=${articleId}`
	
	connection.query(query,data,(err,result)=>{
		if(err) throw err;
		res.json(result)
	})
	
};


// const createNewComment = (req, res) => {
// 	const articleId = req.params.id;

// 	const { comment, commenter } = req.body;

// 	const newComment = new commentsModel({
// 		comment,
// 		articleId,
// 		commenter,
// 	});

// 	newComment
// 		.save()
// 		.then((result) => {
// 			res.status(201).json(result);
// 		})
// 		.catch((err) => {
// 			res.send(err);
// 		});
// };

module.exports = {
	createNewComment,
};
