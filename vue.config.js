module.exports = {
    devServer: {
        proxy: {
            "/api": {
                // target: "http://139.60.163.142:9000",
                target: "http://45.150.76.32:8000",
                pathRewrite: {
                    '^/api': ''
                },
                ws: true,
                changeOrigin: true
            }
        }
    }
};