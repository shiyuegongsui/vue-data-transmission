module.exports = {
    devServer: {
        port: 8080,     // 端口
    },
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    configureWebpack: {
        resolve: {
            alias: {
                '@views': '@/views',
            }
        }
    },
}