import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:3000',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '', // Remove the /api prefix before forwarding
            },
        })
    );
    app.use(
        '/test',
        createProxyMiddleware({
            target: 'http://localhost:3000',
            changeOrigin: true,
            pathRewrite: {
                '^/test': '', // Remove the /test prefix before forwarding
            },
        })
    );
}
