const express = require('express');
const router = express.Router();
const userService = require('../Services/UserService');


router.post("/Login", (req, res, next) => {
    userService.Login(req.body.Name, req.body.Password, (result) => {
        res.send(result);
    });

});

router.get("/GetUsersByFilter/:UserName", (req, res, next) => {
    userService.GetUsersByFilter(req.params.UserName, (result) => {
        res.send(result);
    });

});

router.post("/Register", (req, res, next) => {
    var user={
        "Name":req.body.Name,
        "Password":req.body.Password,
        "Email":req.body.Email,
        "ImgSrc":req.body.ImgSrc,
        "DateOfBirth":req.body.DateOfBirth,
        "WorkAddress":req.body.WorkAddress,
        "IsAdmin":false,
        "UserName":req.body.UserName
    }
    
    userService.Register(user, (result) => {
        res.send(result);
    });

});

module.exports = router;