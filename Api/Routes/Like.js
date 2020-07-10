const express = require('express');
const router = express.Router();
const likeService = require('../Services/LikeService');


router.get("/GetLikes/:id", (req, res, next) => {
    
    likeService.GetLikes(req.params.id, (result) => {
        res.json({
            data: result
        });
    });

});


router.post("/AddLike", (req, res, next) => {
    
    var newLike = {
        "UserId": req.body.UserId,
        "PostId": req.body.PostId
    }
    likeService.AddLike(newLike, (result) => {
        res.json({
            data: result
        });
    });

});


router.post("/CheckLikeExists", (req, res, next) => {
    
    var newLike = {
        "UserId": req.body.UserId,
        "PostId": req.body.PostId
    }
    likeService.CheckLikeExists(newLike, (result) => {
        res.json({
            data: result
        });
    });

});

module.exports = router;