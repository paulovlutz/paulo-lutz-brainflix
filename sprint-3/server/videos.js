const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
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

router.post("/:id/comments", (req, res) => {
    fs.readFile(videosDetails, "utf8", (_, videoDetail) => {
        let videoId = req.params.id;
        let parsedVideoDetail = JSON.parse(videoDetail);
        let videoNewComment = 
            {
                "name": req.body.name,
                "comment": req.body.comment,
                "id": uuidv4(),
                "likes": 0,
                "timestamp": Date.now()
            }

        console.log(videoNewComment);

        for (let i = 0; i < parsedVideoDetail.length; i++) {
            if (parsedVideoDetail[i].id === videoId) {
                parsedVideoDetail[i].comments.push(videoNewComment);
            }
        }

        fs.writeFile(videosDetails, JSON.stringify(parsedVideoDetail), function (err) {
            if (err) {
                console.log(err);
            } else {
                return res.status(201).json(parsedVideoDetail);
            }
        });
    });
});

module.exports = router;