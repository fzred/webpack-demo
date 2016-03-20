var path       = require("path");
module.exports = {
    entry : {
        main: './src/main.js'
    },
    output: {
        path      : path.resolve(__dirname, 'static'),
        // path: './static',
        filename  : '[name].js?[hash]',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'},
        ]
    }
}