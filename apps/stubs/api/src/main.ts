import express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import morgan from 'morgan';

import { apiRouter } from './router';

const port = 20085;
const app = express();

app
  .use(morgan('tiny'))
  .use('/assets', express.static(path.join(__dirname, 'assets')))
  .use(bodyParser.json())
  .use('/api/health', (_, res) => res.status(200).end())
  .use('/api/v1', apiRouter)
  .listen(port, () => {
    console.log(`API Stub running on port ${port}`);
  });
