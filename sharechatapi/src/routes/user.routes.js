const express = require('express');

const router=express.Router();

    console.log("hey1");
    console.log(router);
    router.get('/', function(req,res){
        console.log("hey2");
        res.send('recieved');
    });

    module.exports = router;