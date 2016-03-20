/**
 * Created by lred on 2016/3/20.
 */
var WebpackDevServer = require("webpack-dev-server");
var _                = require('underscore-contrib');
var config           = require('./webpack.config');
var webpack          = require('webpack')

_.map(config.entry, function (value, key) {
    config.entry[key] = [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/dev-server',
        value
    ];
});
config.output.publicPath = 'http://localhost:8080/static/';

config.plugins = (config.plugins || []).concat([
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
]);

var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
    hot       : true,
    // // webpack-dev-middleware options
    // quiet: true,
    noInfo    : true,
    filename  : config.output.filename,
    // watchOptions: {
    //     aggregateTimeout: 300,
    //     poll: 1000
    // },
    publicPath: config.output.publicPath,
    stats     : {colors: true},
});
server.listen(8080, "127.0.0.1", function () {
    console.log('Listening at http://127.0.0.1:8080')
});