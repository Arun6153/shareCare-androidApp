const express = require('express');
const user = require('./../db/models').userModel;
const router = express.Router();

router.get('/', function (req, res) {
    res.send("recieved");
});

router.post('/register', (req, res) => {
    user.create({
        Name: req.body.Name,
        Password: req.body.Password,
        Email: req.body.Email,
        PhoneNo: req.body.PhoneNo,
        Age: req.body.Age
    })
        .then(() => {
            res.send("submitted");
            res.end();
        })
        .catch((err) => {
            console.err("Error While adding User: ", err);
        });
});

router.post('/login', (req, res) => {
    user.find({
        Password: req.body.Password,
        Email: req.body.Email
    })
        .then((data) => {
            if (data.length){console.log(data); res.send("Logged In");}
            else res.send("WRONG");
            res.end();
        })
        .catch((err) => {
            console.log(err);
            res.send("ERROR204");
        });
});

module.exports = router;