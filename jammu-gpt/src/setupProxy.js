const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://llama3-chat.ishavverma.workers.dev',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // remove "/api" prefix when forwarding
      },
    })
  );
};
