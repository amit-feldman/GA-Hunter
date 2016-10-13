const CategoryDAO = require('../services/CategoryDAO');

class CategoriesController {
  static getAll(req, res) {
    CategoryDAO.all()
    .then((categories) => {
      res.status(200).json(categories);
    });
  }
  static getOne(req, res) {
    CategoryDAO.findBy({
      id: req.params.id,
    })
    .then((category) => {
      res.status(200).json(category);
    });
  }
  static createCategory(req, res) {
    const categoryData = req.body;
    CategoryDAO.create(categoryData)
    .then((category) => {
      res.status(200).send(category);
    });
  }
  static deleteCategory(req, res) {
    const id = req.params.id;
    CategoryDAO.delete(id)
    .then(() => {
      res.status(204).send();
    });
  }
}

module.exports = CategoriesController;
