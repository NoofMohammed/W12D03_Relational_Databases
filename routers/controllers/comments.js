const connection = require("../../db/db");

const createNewComment = (req, res) => {
  const articleId = req.params.id;

  const { comment, article, commenter } = req.body;
  const data = [comment, article, commenter];
  const query = `INSERT INTO comments(comment,article_id,commenter) VALUES (?,?,?) WHERE article_id=${articleId}`;

  connection.query(query, data, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

module.exports = {
  createNewComment,
};
