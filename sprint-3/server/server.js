const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// app.use('/upload', uploadVideos);

app.listen(port, () => console.log(`Server running on ${port}`));