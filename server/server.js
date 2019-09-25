const express = require('express');
const next = require('next');
const nextI18NextMiddleware = require('next-i18next/middleware').default;

// i18n middleware setup options
const NextI18NextInstance = require('../i18n');

const port = parseInt(process.env.PORT || 3000, 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


(async () => {
  await app.prepare();
  const server = express();

  // i18n middleware to handle multilingual app
  try {
    server.use(nextI18NextMiddleware(NextI18NextInstance))
  } catch (e) {
    throw (e)
  }

  // Handle nextjs routing
  server.get('*', (req, res) => handle(req, res));

  await server.listen(port);
  console.info(`> Ready on http://localhost:${port}`);
})();
