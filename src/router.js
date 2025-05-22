const bodyParser = require('body-parser');

const routes = require('./routes');

module.exports = (app) => {
  // Uptime checks
  app.get('/status', (req, res) => {
    res.status(200).end();
  });

  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  // use body-parser middleware
  app.use(bodyParser.json());

  // load routes
  app.use(routes());
};
