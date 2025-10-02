const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

let state = { videoMode: false };

app.use(cors());
app.use(express.json());

app.get('/api/mode', (req, res) => {
  res.json(state);
});

app.post('/api/toggle', (req, res) => {
  state.videoMode = !state.videoMode;
  res.json(state);
});

app.get('/', (req, res) => {
  res.send('Backend Running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});