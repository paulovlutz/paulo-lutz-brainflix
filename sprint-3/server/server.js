const express = require('express');
const app = express();
const cors = require('cors');
const videosRoutes = require("./videos");

require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/abacate", (req, res) => {
    console.log("ABACATE DA NOIVINHA!");
});

app.use('/videos', videosRoutes);

app.listen(port, () => console.log(`Server running on ${port}`));