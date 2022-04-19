const path = require('path')

module.exports={
    entry: path.resolve(__dirname, 'src', 'index.jsx'), // use path resolve to avoid erros based on name patterns from OS like / OR \
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve:{
        extensions: ['.js', '.jsx']
    },
    module:{
        rules:[
            {
                test: /\.jsx$/, // $ sign means that this occurency must be at the end.
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    mode: 'development'
}