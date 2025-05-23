const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');

const allowedSources = [
  'http://localhost:5173',
  'http://localhost:3000',
];
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedSources.indexOf(origin) !== -1 || !origin) callback(null, true);
    else callback(new Error('Not allowed by CORS'));
  },
};

module.exports = (app) => {
  // Uptime checks
  app.get('/status', (req, res) => {
    res.status(200).end();
  });

  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  // use cors middleware
  app.use(cors(corsOptions));

  // use body-parser middleware
  app.use(bodyParser.json());

  // load routes
  app.use(routes());
};
