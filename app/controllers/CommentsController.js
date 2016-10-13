const CommentDAO = require('../services/CommentDAO');

class CommentsController {
  static getAll(req, res) {
    CommentDAO.all()
    .then((comments) => {
      res.status(200).json(comments);
    });
  }

  static getOne(req, res) {
    CommentDAO.findBy({
      id: req.params.id,
    })
    .then((comment) => {
      res.status(200).json(comment);
    });
  }

  static createComment(req, res) {
    const commentData = req.body;

    CommentDAO.create(commentData)
    .then((comment) => {
      res.status(200).json(comment);
    });
  }

  static updateComment(req, res) {
    const commentData = req.body;

    CommentDAO.update(commentData)
    .then((comment) => {
      res.status(200).json(comment);
    });
  }

  static deleteComment(req, res) {
    const id = req.params.id;

    CommentDAO.delete(id)
    .then(() => {
      res.status(204).send();
    });
  }
}

module.exports = CommentsController;
