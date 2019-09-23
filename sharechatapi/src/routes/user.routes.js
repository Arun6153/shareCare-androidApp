const express = require('express');
const user = require('./../db/models').userModel;
const product = require('./../db/models').productModel;
const router=express.Router();

router.get('/', function(req,res){
    res.send('recieved');
});

router.post('/register', (req,res) => {
    user.create({
        Name: req.body.Name,
        Password : req.body.Password,
        Email : req.body.Email,
    })
    .then(() => {
        res.end();
    })
    .catch((err) => {
        console.err("Error While adding User: ",err);
    });
});

router.get('/login', (req,res) => {

});

module.exports = router;