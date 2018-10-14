//entry -> output

const path = require ('path');

module.exports = {
    entry: './src/playground/redux101.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/, //run babel loaded on .js files
            exclude: /node_modules/
        },{
            test: /\.s?css$/, //run the use loaders on either css or scss
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true //404s will fallback to 404s
    }
};

