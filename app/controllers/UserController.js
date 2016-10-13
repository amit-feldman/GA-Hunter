const UserDAO = require('../services/UserDAO');

class UserController {
  static getAll(req, res) {
    UserDAO.all().then((users) => {
      res.status(200).json(users);
    });
  }

  static getOne(req, res) {
    UserDAO
    .findBy({
      id: req.params.id,
    })
    .then((user) => res.status(200).json(user));
  }

// createUser handled in the AuthController

  updateUser(req, res) {
    const userData = req.body;

    UserDAO.update(userData)
    .then((user) => {
      res.status(200).json(user);
    });
  }
  deleteUser(req, res) {
    const id = req.params.id;

    UserDAO.delete(id)
    .then(() => {
      res.status(204).send();
    });
  }
}

module.exports = UserController;
