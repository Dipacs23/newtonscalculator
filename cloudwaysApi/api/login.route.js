const express = require('express');
const app = express();
const loginRoutes = express.Router();

// Defined get data(index or listing) route
loginRoutes.route('/').get(function (req, res) {
    Product.find(function (err, products) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(products);
        }
    });
});
