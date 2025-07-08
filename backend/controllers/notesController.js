const { getAllNotes, createNote } = require('../services/dynamodbService');

exports.getNotes = async (req, res) => {
  const notes = await getAllNotes();
  res.json(notes);
};

exports.addNote = async (req, res) => {
  const note = req.body;
  await createNote(note);
  res.json({ message: 'Note saved' });
};
