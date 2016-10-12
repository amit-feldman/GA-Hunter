const CategoryDAO = require('../services/CategoryDAO');

class CategoryController {
  getAll(req, res) {
    CategoryDAO.all()
    .then((categories) => {
      res.status(200).json(categories);
    });
  }
  getOne(req, res) {
    CategoryDAO.findBy({ id: req.params.id })
    .then((category) => {
      res.status(200).json(category);
    });
  }
  createCategory(req, res) {
    const categoryData = req.body;
    CategoryDAO.create(categoryData)
    .then((category) => {
      res.status(200).send(category);
    });
  }
  deleteCategory(req, res) {
    const id = req.params.id;
    CategoryDAO.delete(id)
    .then(() => {
      res.status(204).send();
    });
  }
}

module.exports = CategoryController;
