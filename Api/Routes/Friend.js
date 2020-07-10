const express = require('express');
const router = express.Router();
const friendService = require('../Services/FriendService');


router.get("/GetFriendsById/:id", (req, res, next) => {
    
    friendService.GetFriendsByUserId(req.params.id, (result) => {
        res.json({
            data: result
        });
    });

});







module.exports = router;