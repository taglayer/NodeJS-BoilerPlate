const express = require('express');

const productsService = require('../services/products');

const router = express.Router();

module.exports = (app) => {
  app.use('/products', router);

  router.get('/', async (req, res, next) => {
    try {
      const products = productsService.getProducts();
      return res.status(200).json(products);
    } catch (error) {
      return next(error);
    }
  });
};
