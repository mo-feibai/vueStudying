module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
        }
    },
    // 关闭语法检查
    lintOnSave: false,
    // 配置代理服务器(方式1)
    // devServer: {
    //     proxy: 'http://192.168.245.88:5000'
    // }
    // 配置代理服务器(方式2)
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.245.88:5000',
                // 支持websocket
                ws: true, 
                // 控制请求头中的host值
                changeOrigin: true,
                // 路径重写
                pathRewrite: {
                    "^/api": ""
                }
            },
        }
    }
}