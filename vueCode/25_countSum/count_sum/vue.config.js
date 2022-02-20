module.exports = {
    devServer: {
        proxy: {
            '/pics': {
                target: 'https://api.ixiaowai.cn/',
                // 支持websocket
                ws: true, 
                // 控制请求头中的host值
                changeOrigin: true,
                // 路径重写（正则表达式）
                pathRewrite: {
                    "^/pics": ""
                }
            },
        }
    }
}