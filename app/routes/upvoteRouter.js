const express = require('express');
const UpvoteController = require('../controllers/UpvoteController');

const router = express.Router();

router.get('/', UpvoteController.getAll);
router.get('/:id', UpvoteController.getOne);
router.post('/', UpvoteController.createUpvote);
router.delete('/:id', UpvoteController.deleteUpvote);

module.exports = router;
