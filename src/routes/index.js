const { Router } = require('express');

const products = require('./_products');

module.exports = () => {
  const app = Router();

  products(app);

  return app;
};
