// En tu archivo src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api', createProxyMiddleware({ target: 'http://68.183.126.136:36245', changeOrigin: true }));
};