const express = require('express');
const ProjectController = require('../controllers/ProjectController');

const router = express.Router();

router.get('/', ProjectController.getAll);
router.get('/:id', ProjectController.getOne);
router.post('/', ProjectController.createProject);
router.patch('/:id', ProjectController.updateProject);
router.delete('/:id', ProjectController.deleteProject);

module.exports = router;
