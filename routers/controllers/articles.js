const connection = require("../../db/db");

const getAllArticles = (req, res) => {
  const query = `SELECT * FROM articles`;
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const getArticlesByAuthor = (req, res) => {
  const author = req.query.author;
  const query = `SELECT * FROM articles WHERE author_id=${author}`;
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const getAnArticleById = (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM articles WHERE id=${id}`;
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const createNewArticle = (req, res) => {
  const { title, description, author } = req.body;
  const query = `INSERT INTO articles( title, description, author_id) VALUES (?,?,?)`;
  const data = [title, description, author];

  connection.query(query, data, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const updateAnArticleById = (req, res) => {
  console.log(req.params);

  const id = req.params.id;
  const { title, description, author } = req.body;
  const data = [title, description, author];
  const query = `UPDATE articles SET title=?,description=?,author_id=? WHERE id=${id}`;
  connection.query(query, data, (err, result) => {
    console.log(result, "99");
    if (err) throw err;
    res.json(result);
  });
};

const deleteArticleById = (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM articles WHERE id=${id}`;
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

const deleteArticlesByAuthor = (req, res) => {
  const author = req.body.author;
  const query = `DELETE FROM articles WHERE author_id=${author}`;
  connection.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

module.exports = {
  getAllArticles,
  getArticlesByAuthor,
  getAnArticleById,
  createNewArticle,
  updateAnArticleById,
  deleteArticleById,
  deleteArticlesByAuthor,
};
