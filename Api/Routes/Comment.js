const express = require('express');
const router = express.Router();
const commandService = require('../Services/CommentService');


router.get("/GetComments/:id", (req, res, next) => {
    
    commandService.GetComments(req.params.id, (result) => {
        res.json({
            data: result
        });
    });

});

router.post("/AddComment", (req, res, next) => {
    
    var comment={
        "PostId":req.body.postId,
        "UserId":req.body.userId,
        "Date":req.body.date,
        "Text":req.body.text
    }
    

    commandService.AddComment(comment, (result) => {
        res.json({
            data: result
        });
    });

});

module.exports = router;