const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();
const videosDetails = "./videosDetails.json";

router.get("/", (req, res) => {
    fs.readFile(videosDetails, "utf8", (_, videoData) => {
        let nextVideoDisplay = JSON.parse(videoData).map(function(singleVideo) {
            return (
                {
                    id: singleVideo.id,
                    title: singleVideo.title,
                    channel: singleVideo.channel,
                    image: singleVideo.image
                }
            )
        });

        return res.status(200).json(nextVideoDisplay);
    });
});

router.post("/", (req, res) => {

    fs.readFile(videosDetails, "utf8", (_, videoDetail) => {
        let parsedVideoDetail = JSON.parse(videoDetail);

        let newVideoContent = 
            {
                id: uuidv4(),
                title: req.body.title,
                channel: "BrainStation Test",
                image: req.body.image,
                description: req.body.description,
                views: "999,999",
                likes: "999,999",
                duration: "5:00",
                video: "https://project-2-api.herokuapp.com/stream",
                timestamp: Date.now(), 
                comments: [
                    {
                        name: "Micheal Lyons",
                        comment:" They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
                        id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
                        likes: "0",
                        timestamp: 1545162149000
                    },
                    
                    {
                        name: "Gary Wong",
                        comment: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
                        id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
                        likes: 0,
                        timestamp: 1544595784046
                    },
        
                    {
                        name: "Theodore Duncan",
                        comment: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
                        id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
                        likes: 0,
                        timestamp: 1542262984046
                    }
                ]
            };

        parsedVideoDetail.push(newVideoContent);

        fs.writeFile(videosDetails, JSON.stringify(parsedVideoDetail), function(err) {
            if (err) {
                console.log(err);
            } else {
                return res.status(201).json(parsedVideoDetail);
            }
        });
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
        return res.status(400).json({
            "message": "No video with that id exists"
        });
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

        for (let i = 0; i < parsedVideoDetail.length; i++) {
            if (parsedVideoDetail[i].id === videoId) {
                parsedVideoDetail[i].comments.push(videoNewComment);
            }
        }

        fs.writeFile(videosDetails, JSON.stringify(parsedVideoDetail), function (err) {
            if (err) {
                console.log(err);
            } else {
                return res.status(201).json(videoNewComment);
            }
        });
    });
});

module.exports = router;