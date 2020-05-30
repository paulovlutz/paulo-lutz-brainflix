const express = require('express');
const fs = require('fs');
const router = express.Router();
const videosFileName = './videos.json';
const videosDetails = "./videosDetails.json";

router.get("/", (req, res) => {
    fs.readFile(videosFileName, "utf8", (_, videoData) => {
        return res.status(200).json(JSON.parse(videoData));
    });
});

router.get("/:id", (req, res) => {
    fs.readFile(videosDetails, "utf8", (_, videoDetail) => {
        let videoId = req.params.id;
        let parsedVideoDetail = JSON.parse(videoDetail);
        for (let i = 0; i < parsedVideoDetail.length; i++) {
            if (parsedVideoDetail[i].id === videoId) {
                return res.status(200).json(parsedVideoDetail[i]);
            }
        }
    });
});

module.exports = router;