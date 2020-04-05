module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://139.60.163.142:9000",
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
};