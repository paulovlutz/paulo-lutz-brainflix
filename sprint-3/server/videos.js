const express = require('express');
const fs = require('fs');
const router = express.Router();
const videosFileName = './videos.json';

router.get("/", (req, res) => {
    fs.readFile(videosFileName, "utf8", (_, videoData) => {
        return res.status(200).json(JSON.parse(videoData));
    });
});

module.exports = router;