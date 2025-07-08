const express = require('express');
const notesRouter = require('./routes/notes');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use('/api/notes', notesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`CloudNote API listening on port ${PORT}`);
});
