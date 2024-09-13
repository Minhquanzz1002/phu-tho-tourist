const path = require('path');
const SRC_DIR = path.resolve(__dirname, 'src/view');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const VENDOR_LIBS = ['react', 'react-dom', 'react-router-dom'];

module.exports = {
    entry: {
        bundle: path.join(SRC_DIR, 'index.tsx'),
        vendor: VENDOR_LIBS
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'babel-loader',
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {importLoaders: 1, sourceMap: true},
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true, implementation: require('sass') },
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: SRC_DIR + '/index.html',
        }),
        new Dotenv({ path: './.env' })
    ],
    resolve: {
        extensions: ['.ts', '.js', '.tsx'],
        plugins: [new TsconfigPathsPlugin()],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[chunkhash].[chunkhash].js',
        chunkFilename: '[chunkhash].bundle.js',
        publicPath: '/',
        clean: true
    }
}