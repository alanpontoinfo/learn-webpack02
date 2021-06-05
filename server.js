const express =require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config =require('./webpack.config.js');
const compiler = webpack(config);
// Comunica para o express use o webpack-dev-middleware e usa o webpack.config.js
//arquivo de configuraçao como base

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })

);

app.listen(5000, function(){
    console.log('Example app listening na porta 5000\n');
});