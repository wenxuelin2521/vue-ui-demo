const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin


const assetsPublicPath = '/'

module.exports = {
    mode: 'development',
    entry: {//多入口
        index: path.resolve(__dirname, './src/pages/index/index.js'),
        about: path.resolve(__dirname, './src/pages/about/about.js'),
    },
    output: {//出口
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.[hash:5].js',
        publicPath: assetsPublicPath,//development:将 打包文件 放 "内存" 在指定目录下 默认 /    production:资源的引入页面时候的相对的path
    },
    //使用dev-server
    devServer: {
        // contentBase: path.join(__dirname, 'dist'), //devServer托管的目录：默认项目的根目录
        compress: true,
        port: 3000,
        hot: true,
        // open: true,
        host: "127.0.0.1",
        // publicPath: assetsPublicPath,//将 打包文件 放 "内存" 在指定目录下 默认 /
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            title: 'my-demo-title',
            template: path.join(__dirname, './src/pages/index/index.html'),
            filename: 'index.html',
            chunks: ['index'] //告诉webpack要用哪个入口
        }),
        new HtmlWebPackPlugin({
            title: 'my-demo-title',
            template: path.join(__dirname, './src/pages/about/about.html'),
            filename: 'about.html',
            chunks: ['about']
        })
    ],
    resolve: {
        extensions: ['.js', '.json', '.vue'], // 表示，这几个文件的后缀名，可以省略不写（按先后顺序加载）
        alias: { // 表示别名
            '@': path.join(__dirname, './src') // 这样，@ 就表示 项目根目录中 src 的这一层路径
        }
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, //安装：cnpm i --save-dev style-loader css-loader
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, //cnpm i --save-dev less less-loader
            { test: /\.s(c|a)ss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },//cnpm i sass-loader node-sass --save-dev
            { test: /\.jpg|.png|.gif$/, use: 'url-loader' },//cnpm i --save-dev url-loader
            { test: /\.ttf|.eot|.woff|.woff2|.svg$/, use: 'url-loader' },//cnpm i --save-dev url-loader
        ]
    }
}