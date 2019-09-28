const express = require('express');
const product = require('./../db/models').productModel;
const router = express.Router();

router.post('/addProduct', (req, res) => {
    product.create({
        Name: req.body.Name,
        Description: req.body.Description,
        Price: req.body.Price,
        Location: req.body.Location,
        ProductType: req.body.ProductType,
    })
    .then(() => {
        res.send("Product Submitted");
        res.end();
    })
    .catch((err) => {
        console.log(err);
    });
});

router.post('/getProduct', (req, res) => {
    product.find({
        Name: req.body.Name,
    }).then((data) => {
        if(data.length)
        {
            res.send('Data is here');
            console.log(data);
        }
        else res.send('Data not found!');
        res.end();
    }).catch((err) => {
        console.log(err);
        res.send(err);
    });
});

module.exports = router;