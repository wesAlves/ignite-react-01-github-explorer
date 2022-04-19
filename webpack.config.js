const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV === 'production';

module.exports={
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'), // use path resolve to avoid erros based on name patterns from OS like / OR \
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve:{
        extensions: ['.js', '.jsx']
    },
    devServer:{
        static:{
            directory: path.resolve(__dirname, 'public')
        }
        // port: '3332'
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module:{
        rules:[
            {
                test: /\.jsx$/, // $ sign means that this occurency must be at the end.
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
}