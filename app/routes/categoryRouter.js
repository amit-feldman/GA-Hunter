const express = require('express');
const CategoriesController = require('../controllers/CategoriesController');

const router = express.Router();

router.get('/', CategoriesController.getAll);
router.get('/:id', CategoriesController.getOne);
router.post('/', CategoriesController.createCategory);
router.delete('/:id', CategoriesController.deleteCategory);

module.exports = router;
