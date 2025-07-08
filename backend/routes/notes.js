const express = require('express');
const { getNotes, addNote } = require('../controllers/notesController');
const router = express.Router();

router.get('/', getNotes);
router.post('/', addNote);

module.exports = router;
