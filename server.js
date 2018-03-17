import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.config.js';

const app = express();
app.use(webpackMiddleware(webpack(webpackConfig)));

app.get('/api', (req, res) => {
  console.log('[wserver] Received request: ', req);
  res.send('Hello, world! I\'m the api')
  console.log('[wserver] Listening for requests...')
});

app.listen(4000, () => {
  console.log('[wserver] Listening for requests...')
});
