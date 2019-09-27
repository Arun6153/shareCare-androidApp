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
    }).then(() => {
        res.send("Product Submitted");
        res.end();
    }).catch((err) => {
        console.log(err);
    });
});

router.post('/getProduct', (req, res) => {
    product.find({
        Name: req.body.Name,
    }).then((data) => {
        console.log(data);
        res.send('Data is here');
        res.end();
    }).catch((err) => {
        console.log(err);
        res.send(err);
    });
});

module.exports = router;