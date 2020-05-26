const path = require('path')

function resolve(dir){
    return path.join(__dirname,dir)
}

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'styles': resolve('src/assets/styles'),
                'common': resolve('src/common')
            }
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/mock'
                }
            }
        }
    }
}