const express = require('express');
const router = express.Router();
const postService = require('../Services/PostService');


router.get("/GetPosts", (req, res, next) => {
    postService.GetPosts((result) => {
        res.json({
            data: result
        });
    });
});

router.get("/GetPosts/:userName", (req, res, next) => {
    postService.GetPostsByPublisher(req.params.userName,(result) => {
        res.json({
            data: result
        });
    });
});


router.get("/GetPosts/:userName", (req, res, next) => {
    postService.GetPostsByRangeDate(req.params.userName,(result) => {
        res.json({
            data: result
        });
    });
});


module.exports = router;