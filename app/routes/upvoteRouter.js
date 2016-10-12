const express = require('express');
const UpvoteController = require('../controllers/UpvoteController');

const router = express.Router();

router.get('/', UpvoteController.getAll);
router.get('/:id', UpvoteController.getOne);
router.post('/', UpvoteController.createProject);
router.delete('/:id', UpvoteController.deleteProject);

module.exports = router;
