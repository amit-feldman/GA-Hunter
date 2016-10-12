const CategoryDAO = require('../services/CategoryDAO');

class CategoryController {
  getAll(req, res) {
    CategoryDAO.all()
  }
  getOne(req, res) {
    dd
  }
  createCategory(req, res) {
    dd
  }
  deleteCategory(req, res) {
    dd
  }
}

module.exports = CategoryController;
