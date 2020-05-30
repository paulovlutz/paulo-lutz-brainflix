const express = require('express');
const fs = require('fs');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const videosDetails = "./videosDetails.json";

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


module.exports = router;