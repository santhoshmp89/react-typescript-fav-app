const path = require('path');
const rules = [{
    test: /\.tsx?/,
    exclude: /node_module/,
    loader: ['babel-loader']
}];
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    target: 'web',
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: { rules },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    // plugins: [
    //     // new CleanWebpackPlugin(),
    //     new HtmlWebpackPlugin({
    //         title: 'Hot Module Replacement',
    //     }),
    // ],
    devServer: {
        contentBase: './',
        port: 5000
    }
}