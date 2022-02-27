const express = require('express');
const { getAllProducts } = require('../controllers/productController.js');
const router = express.Router();

router.route("/products").get(Function(getAllProducts));

module.exports = router;