const UpvoteDAO = require('../services/UpvoteDAO');

class UpvoteController {
  static getAll(req, res) {
    UpvoteDAO.all().then((upvotes) => {
      res.status(200).json(upvotes);
    });
  }

  static getOne(req, res) {
    UpvoteDAO.findBy({
      id: req.params.id,
    })
    .then((upvote) => {
      res.status(200).json(upvote);
    });
  }

  static createUpvote(req, res) {
    const projectData = req.body;

    UpvoteDAO.create(projectData)
    .then((upvote) => {
      res.status(200).json(upvote);
    });
  }

  static deleteUpvote(req, res) {
    const id = req.params.id;

    UpvoteDAO.delete(id)
    .then(() => {
      res.status(204).send();
    });
  }
}

module.exports = UpvoteController;
