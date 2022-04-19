const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV === 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.tsx'), // use path resolve to avoid erros based on name patterns from OS like / OR \
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx','.ts', '.tsx']
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public')
        }
        // port: '3332'
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.[tj]sx$/, // $ sign means that this occurency must be at the end.
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.s[ac]ss$/, // $ sign means that this occurency must be at the end.
                exclude: /node_modules/,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            }
        ]
    },
}