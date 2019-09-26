const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
        products: './src/products/index.js',
        aboutCham: './src/aboutUs/index.js'
    },
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        useLocalIp: true,
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: '查姆信息',
            template: './src/index.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            title: '查姆信息产品中心',
            filename: 'products.html',
            template: './src/index.html',
            chunks: ['products']
        }),
        new HtmlWebpackPlugin({
            title: '关于查姆',
            filename: 'aboutCham.html',
            template: './src/index.html',
            chunks: ['aboutCham']
        })

    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                },
                'postcss-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    outputPath: './imgs'
                }
            }]
        }, {
            test: /\.html$/,
            use: {
                loader: 'html-loader'
            }
        }]
    }
}