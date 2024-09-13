const common = require('./webpack.common');
const {merge} = require("webpack-merge");

const devServer = {
    port: 4545,
    open: true,     // Automatically open browser on project start
    historyApiFallback: {
        verbose: true
    },
    compress: true, // Enables compression of static assets (CSS, Javascript, HTML,..)
    headers: {'Access-Control-Allow-Origin': '*'},
    static: {
        publicPath: '/',
        watch: true
    },
    watchFiles: ['src/**/*.(tsx|ts|scss|png|jpg)', 'public/**/*']
}

const config = {
    mode: "development",
    devtool: "source-map",
    devServer
}

module.exports = merge(common, config)