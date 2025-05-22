const http = require('http');
const express = require('express');

const routes = require('./router');

const PORT = process.env.PORT || 7070;

const app = express();
const server = http.createServer(app);
routes(app);

server.listen(PORT, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    process.exit(1);
  }

  // eslint-disable-next-line no-console
  console.log(`Server listening on port: ${PORT}`);
});
